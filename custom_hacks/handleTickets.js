jQuery(document).ready(function($){
  $(window).on("load", function () {
    var optionName = $('#masterOption').find(":selected").text();
    if (optionName == '— Select a Department —') {
      var idOptions = ['83', '84', '85', '86', '87', '88', '89', '90', '91', '36', '37', '39', '41', '43', '45', '51', '53', '55', '57', '60', '61', '63', '65', '67', '69', '79', '80', '81', '82', '35', '38', '40', '42', '44', '50', '52', '54', '56', '58', '59', '62', '64',
        '66', '68', '70', '92', '93', '94', '95', '96', '97', '98', '99', '71', '72', '73', '74', '75', '76', '77', '78','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114'];
      for (var i = idOptions.length - 1; i >= 0; i--) {
        $('#topicId option[value="' + idOptions[i] + '"]').css('display', 'none');
      }
    }
  });
  var handleTickets = {
    init : function() {
      this.createTicket();
      this.validateTicket();
      var value = handleTickets.getCookie("masteroptionval");
      if ($('#msg_error').length) {
        $('#masterOption').val(value);
        this.hidetoppics(value);
      } else {
        handleTickets.setCookie("masteroptionval", "", 1);
      }
    },
    createTicket : function() {
      $('#masterOption').change(function(value){
        var masterOptionVal = $(this).val();
        handleTickets.setCookie("masteroptionval", masterOptionVal, 1);
        handleTickets.hidetoppics(masterOptionVal);
        $('#topicId').val('');
      });
    },
    hidetoppics : function(topic) {
      switch(topic) {
        case 'hrop':
          handleTickets.hide_topics(handleTickets.get_helptopicadminpune());
          handleTickets.hide_topics(handleTickets.get_hrtopiclnd());
          handleTickets.hide_topics(handleTickets.get_hrta());
          handleTickets.hide_topics(handleTickets.get_hrpmo());
          handleTickets.hide_topics(handleTickets.get_financetopicids());
          handleTickets.hide_topics(handleTickets.get_admintopicind());
          handleTickets.hide_topics(handleTickets.get_hrpms());
          handleTickets.hide_topics(handleTickets.get_admintopicchennai());
          handleTickets.hide_topics(handleTickets.get_mobiletechsupport());
          handleTickets.hide_topics(handleTickets.get_datamigration());
        //show this
        handleTickets.show_topics(handleTickets.get_hrtopicidsp());
        break;
        case 'adminp':
          handleTickets.hide_topics(handleTickets.get_hrtopicidsp());
          handleTickets.hide_topics(handleTickets.get_hrtopiclnd());
          handleTickets.hide_topics(handleTickets.get_hrta());
          handleTickets.hide_topics(handleTickets.get_hrpmo());
          handleTickets.hide_topics(handleTickets.get_financetopicids());
          handleTickets.hide_topics(handleTickets.get_admintopicind());
          handleTickets.hide_topics(handleTickets.get_hrpms());
          handleTickets.hide_topics(handleTickets.get_admintopicchennai());
          handleTickets.hide_topics(handleTickets.get_mobiletechsupport());
          handleTickets.hide_topics(handleTickets.get_datamigration());
        //show this
        handleTickets.show_topics(handleTickets.get_helptopicadminpune());
        break;
        case 'hrlnd':
          handleTickets.hide_topics(handleTickets.get_hrtopicidsp());
          handleTickets.hide_topics(handleTickets.get_helptopicadminpune());
          handleTickets.hide_topics(handleTickets.get_hrta());
          handleTickets.hide_topics(handleTickets.get_hrpmo());
          handleTickets.hide_topics(handleTickets.get_financetopicids());
          handleTickets.hide_topics(handleTickets.get_admintopicind());
          handleTickets.hide_topics(handleTickets.get_hrpms());
          handleTickets.hide_topics(handleTickets.get_admintopicchennai());
          handleTickets.hide_topics(handleTickets.get_mobiletechsupport());
          handleTickets.hide_topics(handleTickets.get_datamigration());
        //show this
        handleTickets.show_topics(handleTickets.get_hrtopiclnd());
        break;
        case 'admini':
          handleTickets.hide_topics(handleTickets.get_hrtopicidsp());
          handleTickets.hide_topics(handleTickets.get_helptopicadminpune());
          handleTickets.hide_topics(handleTickets.get_hrta());
          handleTickets.hide_topics(handleTickets.get_hrpmo());
          handleTickets.hide_topics(handleTickets.get_financetopicids());
          handleTickets.hide_topics(handleTickets.get_hrtopiclnd());
          handleTickets.hide_topics(handleTickets.get_hrpms());
          handleTickets.hide_topics(handleTickets.get_admintopicchennai());
          handleTickets.hide_topics(handleTickets.get_mobiletechsupport());
          handleTickets.hide_topics(handleTickets.get_datamigration());
        //show this
        handleTickets.show_topics(handleTickets.get_admintopicind());
        break;
        case 'adminc':
          handleTickets.hide_topics(handleTickets.get_hrtopicidsp());
          handleTickets.hide_topics(handleTickets.get_helptopicadminpune());
          handleTickets.hide_topics(handleTickets.get_hrta());
          handleTickets.hide_topics(handleTickets.get_hrpmo());
          handleTickets.hide_topics(handleTickets.get_financetopicids());
          handleTickets.hide_topics(handleTickets.get_hrtopiclnd());
          handleTickets.hide_topics(handleTickets.get_hrpms());
          handleTickets.hide_topics(handleTickets.get_admintopicind());
          handleTickets.hide_topics(handleTickets.get_mobiletechsupport());
          handleTickets.hide_topics(handleTickets.get_datamigration());
        //show this
        handleTickets.show_topics(handleTickets.get_admintopicchennai());
        break;
        case 'hrpms':
          handleTickets.hide_topics(handleTickets.get_hrtopicidsp());
          handleTickets.hide_topics(handleTickets.get_helptopicadminpune());
          handleTickets.hide_topics(handleTickets.get_hrta());
          handleTickets.hide_topics(handleTickets.get_hrpmo());
          handleTickets.hide_topics(handleTickets.get_financetopicids());
          handleTickets.hide_topics(handleTickets.get_hrtopiclnd());
          handleTickets.hide_topics(handleTickets.get_admintopicind());
          handleTickets.hide_topics(handleTickets.get_admintopicchennai());
          handleTickets.hide_topics(handleTickets.get_mobiletechsupport());
          handleTickets.hide_topics(handleTickets.get_datamigration());
        //show this
        handleTickets.show_topics(handleTickets.get_hrpms());
        break;
        case 'hrta':
          handleTickets.hide_topics(handleTickets.get_hrtopicidsp());
          handleTickets.hide_topics(handleTickets.get_helptopicadminpune());
          handleTickets.hide_topics(handleTickets.get_hrpms());
          handleTickets.hide_topics(handleTickets.get_hrpmo());
          handleTickets.hide_topics(handleTickets.get_financetopicids());
          handleTickets.hide_topics(handleTickets.get_hrtopiclnd());
          handleTickets.hide_topics(handleTickets.get_admintopicind());
          handleTickets.hide_topics(handleTickets.get_admintopicchennai());
          handleTickets.hide_topics(handleTickets.get_mobiletechsupport());
          handleTickets.hide_topics(handleTickets.get_datamigration());
        //show this
        handleTickets.show_topics(handleTickets.get_hrta());
        break;
        case 'hrpmo':
          handleTickets.hide_topics(handleTickets.get_hrtopicidsp());
          handleTickets.hide_topics(handleTickets.get_helptopicadminpune());
          handleTickets.hide_topics(handleTickets.get_hrpms());
          handleTickets.hide_topics(handleTickets.get_hrta());
          handleTickets.hide_topics(handleTickets.get_financetopicids());
          handleTickets.hide_topics(handleTickets.get_hrtopiclnd());
          handleTickets.hide_topics(handleTickets.get_admintopicind());
          handleTickets.hide_topics(handleTickets.get_admintopicchennai());
          handleTickets.hide_topics(handleTickets.get_mobiletechsupport());
          handleTickets.hide_topics(handleTickets.get_datamigration());
        //show this
        handleTickets.show_topics(handleTickets.get_hrpmo());
        break;
        case 'finance':
          handleTickets.hide_topics(handleTickets.get_hrtopicidsp());
          handleTickets.hide_topics(handleTickets.get_helptopicadminpune());
          handleTickets.hide_topics(handleTickets.get_hrtopiclnd());
          handleTickets.hide_topics(handleTickets.get_admintopicind());
          handleTickets.hide_topics(handleTickets.get_hrpms());
          handleTickets.hide_topics(handleTickets.get_hrta());
          handleTickets.hide_topics(handleTickets.get_hrpmo());
          handleTickets.hide_topics(handleTickets.get_admintopicchennai());
          handleTickets.hide_topics(handleTickets.get_mobiletechsupport());
          handleTickets.hide_topics(handleTickets.get_datamigration());
        //show this
        handleTickets.show_topics(handleTickets.get_financetopicids());
        break;
        case 'tsr':
          handleTickets.hide_topics(handleTickets.get_hrtopicidsp());
          handleTickets.hide_topics(handleTickets.get_helptopicadminpune());
          handleTickets.hide_topics(handleTickets.get_hrtopiclnd());
          handleTickets.hide_topics(handleTickets.get_admintopicind());
          handleTickets.hide_topics(handleTickets.get_hrpms());
          handleTickets.hide_topics(handleTickets.get_hrta());
          handleTickets.hide_topics(handleTickets.get_hrpmo());
          handleTickets.hide_topics(handleTickets.get_admintopicchennai());
          handleTickets.hide_topics(handleTickets.get_financetopicids());
          handleTickets.hide_topics(handleTickets.get_datamigration());
          //show this
          handleTickets.show_topics(handleTickets.get_mobiletechsupport());
          break;
        case '':
          handleTickets.hide_topics(handleTickets.get_hrtopicidsp());
          handleTickets.hide_topics(handleTickets.get_helptopicadminpune());
          handleTickets.hide_topics(handleTickets.get_hrtopiclnd());
          handleTickets.hide_topics(handleTickets.get_admintopicind());
          handleTickets.hide_topics(handleTickets.get_hrpms());
          handleTickets.hide_topics(handleTickets.get_hrta());
          handleTickets.hide_topics(handleTickets.get_hrpmo());
          handleTickets.hide_topics(handleTickets.get_financetopicids());
          handleTickets.hide_topics(handleTickets.get_admintopicchennai());
          handleTickets.hide_topics(handleTickets.get_mobiletechsupport());
          handleTickets.hide_topics(handleTickets.get_datamigration());
        break;
        case 'mgr':
          handleTickets.hide_topics(handleTickets.get_hrtopicidsp());
          handleTickets.hide_topics(handleTickets.get_helptopicadminpune());
          handleTickets.hide_topics(handleTickets.get_hrtopiclnd());
          handleTickets.hide_topics(handleTickets.get_admintopicind());
          handleTickets.hide_topics(handleTickets.get_hrpms());
          handleTickets.hide_topics(handleTickets.get_hrta());
          handleTickets.hide_topics(handleTickets.get_hrpmo());
          handleTickets.hide_topics(handleTickets.get_admintopicchennai());
          handleTickets.hide_topics(handleTickets.get_financetopicids());
          handleTickets.hide_topics(handleTickets.get_mobiletechsupport());
          //show this
          handleTickets.show_topics(handleTickets.get_datamigration());
        break;
      }
    },
    get_hrtopicidsp : function() {
      var options = ['83', '84', '85', '86', '87', '88', '89', '90', '91','42'];
      return options;
    },

    get_helptopicadminpune : function() {

      var options = ['36', '37', '39', '43','45', '51', '53', '55', '57', '60', '61', '63', '65','67','69'];
      return options;
    },
    get_hrtopiclnd : function() {
      var options = ['79', '80', '81', '82'];
      return options;
    },
    get_admintopicind : function() {

      var options = ['35', '38', '40', '44', '50', '52', '54', '56', '58', '59','62','64','66', '68', '70'];
      return options;
    },
    get_admintopicchennai : function() {
      var options = ['100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110','111','112','113'];
      return options;
    },
    get_hrpms : function() {
      var options = ['92', '93'];
      return options;
    },
    get_hrta : function() {
      var options = ['94', '95'];
      return options;
    },
    get_hrpmo : function() {
      var options = ['96','97','98','99'];
      return options;
    },
    get_financetopicids : function() {
      var options = ['71', '72', '73', '74', '75', '76', '77', '78'];
      return options;
    },
    get_mobiletechsupport : function() {
      var options = ['114',];
      return options;
    },
    get_datamigration : function() {
      var options = ['115','116','117',];
      return options;
    },
    hide_topics : function(idList) {
      for (var i = idList.length - 1; i >= 0; i--) {
        /*console.log(idList[i]);*/
        $('#topicId option[value="' + idList[i] + '"]').css('display', 'none');
      }
    },
    show_topics : function(idList) {
      for (var i = idList.length - 1; i >= 0; i--) {
        var str = $('#topicId option[value="' + idList[i] + '"]').html();
        var str1 = str.replace('[P]', '');
        str2 = str1.replace('[I]', '');
        str = str2.replace('[C]', '');
        $('#topicId option[value="' + idList[i] + '"]').html(str);
        $('#topicId option[value="' + idList[i] + '"]').css('display', 'block');
      }
    },
    validateTicket : function(){
      $('#submitTicket').click(function(event){
        var masterOptionVal = $('#masterOption').val();
        masterOptionVal = masterOptionVal.trim();
        if (masterOptionVal == '') {
          $('#masterOptionValidate').html('&nbsp;Select a Help Topic');
          return false;
        } else {
          handleTickets.setCookie("masteroptionval", masterOptionVal, 1);
          return true;
        }
      });
    },
    setCookie : function(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie : function(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  };
  handleTickets.init();
});
