<?php
if(!defined('OSTCLIENTINC')) die('Access Denied!');
$info=array();
if($thisclient && $thisclient->isValid()) {
    $info=array('name'=>$thisclient->getName(),
                'email'=>$thisclient->getEmail(),
                'phone'=>$thisclient->getPhoneNumber());
}

$info=($_POST && $errors)?Format::htmlchars($_POST):$info;

$form = null;
if (!$info['topicId']) {
    if (array_key_exists('topicId',$_GET) && preg_match('/^\d+$/',$_GET['topicId']) && Topic::lookup($_GET['topicId']))
        $info['topicId'] = intval($_GET['topicId']);
    else
        $info['topicId'] = $cfg->getDefaultTopicId();
}

$forms = array();
if ($info['topicId'] && ($topic=Topic::lookup($info['topicId']))) {
    foreach ($topic->getForms() as $F) {
        if (!$F->hasAnyVisibleFields())
            continue;
        if ($_POST) {
            $F = $F->instanciate();
            $F->isValidForClient();
        }
        $forms[] = $F->getForm();
    }
}

?>
<h1><?php echo __('Open a New Ticket');?></h1>
<p><?php echo __('Please fill in the form below to open a new ticket.');?></p>
<form id="ticketForm" method="post" action="open.php" enctype="multipart/form-data">
  <?php csrf_token(); ?>
  <input type="hidden" name="a" value="open">
  <table width="100%" cellpadding="1" cellspacing="0" border="0">
    <tbody>
<?php
        if (!$thisclient) {
            $uform = UserForm::getUserForm()->getForm($_POST);
            if ($_POST) $uform->isValid();
            $uform->render(array('staff' => false, 'mode' => 'create'));
        }
        else { ?>
            <tr><td colspan="2"><hr /></td></tr>
        <tr><td><span><?php echo __('Email'); ?> : </span><span><?php
            echo $thisclient->getEmail(); ?></span></td></tr>
        <tr><td><span><?php echo __('Name'); ?> : </span><span><?php
            echo Format::htmlchars($thisclient->getName()); ?></span></td></tr>
        <?php } ?>
    </tbody>
    <tbody>
         <!-- ####- Open a Ticket InfoBeans Hack -#### -->
     <script type="text/javascript" src="/custom_hacks/handleTickets.js"></script>
     <tr><td colspan="2"><hr />
        <div class="form-header" style="margin-bottom:0.5em">
        <b><?php echo __('Select Department'); ?></b>
        </div>
    </td></tr>
    <tr><td colspan="2">    
        <div style="width: 100%;float: left;">
            <select id="masterOption">
                <option value="" selected="selected">— Select a Department —</option>
                <option value="adminp">Admin - Pune</option>
                <option value="admini">	Admin - Indore </option>
                <option value="adminc">	Admin - Chennai </option>
                <option value="finance">Finance Support</option>
                <option value="hrlnd">HR - Learning & Development </option>
                <option value="hrop">People - Operations </option>
                <option value="hrpms">HR - PMS  </option>
                <option value="hrta">HR - Talent Acquisition  </option>
                <option value="hrpmo">PMO - Timesheet </option>
                <option value="tsr">Attendance Mobile App </option>
                <option value="mgr">Data Migration - Insync to internal system </option>

            </select>
            <font class="error" id="masterOptionValidate">&nbsp;*</font>
        </div>
    </td></tr>
    <!-- ####- Open a Ticket InfoBeans Hack -#### -->
    <tr><td colspan="2"><hr />
        <div class="form-header" style="margin-bottom:0.5em">
        <b><?php echo __('Sub Queries'); ?></b>
        </div>
    </td></tr>
    <tr>
        <td colspan="2">
            <select id="topicId" name="topicId" onchange="javascript:
                    var data = $(':input[name]', '#dynamic-form').serialize();
                    $.ajax(
                      'ajax.php/form/help-topic/' + this.value,
                      {
                        data: data,
                        dataType: 'json',
                        success: function(json) {
                          $('#dynamic-form').empty().append(json.html);
                          $(document.head).append(json.media);

                            var selectedOption = $('#topicId option:selected');
                            var slaValue = selectedOption.data('sla');
                            if (slaValue) {
                                $('#topic_sla').html('<strong>SLA:</strong> ' + slaValue);
                            } else {
                                $('#topic_sla').html('');
                            }
                        }
                        
                      });">
                <option value="" selected="selected">&mdash; <?php echo __('Select a Help Topic');?> &mdash;</option>
                <?php
                if($topics=Topic::getPublicHelpTopics()) {

                    foreach($topics as $id =>$name) {
                        $sla_data=Topic::getSLAByTopicId($id );
                        echo sprintf('<option value="%d" %s data-sla="%s">%s</option>',
                                $id, ($info['topicId']==$id)?'selected="selected"':'', $sla_data['name'],$name);
                    }
                } ?>
            </select>
            <font class="error">*&nbsp;<?php echo $errors['topicId']; ?></font>
            <span style="min-height: 36px;color: #5b6073;font-size: 16px;line-height: 160%;padding: 5px;"id="topic_sla" name="topic_sla"></span>

        </td>
    </tr>
    </tbody>
    <tbody id="dynamic-form">
        <?php
        $options = array('mode' => 'create');
        foreach ($forms as $form) {
            include(CLIENTINC_DIR . 'templates/dynamic-form.tmpl.php');
        } ?>
    </tbody>
    <tbody>
    <?php
    if($cfg && $cfg->isCaptchaEnabled() && (!$thisclient || !$thisclient->isValid())) {
        if($_POST && $errors && !$errors['captcha'])
            $errors['captcha']=__('Please re-enter the text again');
        ?>
    <tr class="captchaRow">
        <td class="required"><?php echo __('CAPTCHA Text');?>:</td>
        <td>
            <span class="captcha"><img src="captcha.php" border="0" align="left"></span>
            &nbsp;&nbsp;
            <input id="captcha" type="text" name="captcha" size="6" autocomplete="off">
            <em><?php echo __('Enter the text shown on the image.');?></em>
            <font class="error">*&nbsp;<?php echo $errors['captcha']; ?></font>
        </td>
    </tr>
    <?php
    } ?>
    
    <tr><td colspan=2>&nbsp;</td></tr>
    </tbody>
  </table>
<hr/>
  <p class="buttons" style="text-align:center;">
        <input type="submit" value="<?php echo __('Create Ticket');?>">
        <input type="reset" name="reset" value="<?php echo __('Reset');?>">
        <input type="button" name="cancel" value="<?php echo __('Cancel'); ?>" onclick="javascript:
            $('.richtext').each(function() {
                var redactor = $(this).data('redactor');
                if (redactor && redactor.opts.draftDelete)
                    redactor.plugin.draft.deleteDraft();
            });
            window.location.href='index.php';">
  </p>
</form>
