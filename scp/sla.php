<?php
require('staff.inc.php');
require_once(STAFFINC_DIR.'header.inc.php');
$nav->setTabActive('sla');
?>
<div id="landing_page">
<script type="text/javascript">
            function openTab(th)
            {
                window.open(th.name,'_blank');
            }
        </script>
<div class="main-content">
<h1>SLA</h1>
<p>SLA stands for Service Level Agreement. It is a contractual agreement between a service provider and its customer that defines the level of service that the provider is expected to deliver. The agreement outlines the service standards, quality, and performance metrics that the service provider will adhere to.

<br><br>An SLA typically includes specific targets for various aspects of the service, such as availability, uptime, response time, resolution time, and customer support. It also defines the consequences that the service provider will face if it fails to meet the agreed-upon service levels, such as financial penalties, service credits, or termination of the contract.</p>
<div class="sla_doc">
<ul>
<li><a onClick="openTab(this)" href="#" name="documents/Helpdesk-SLA-Finance.pdf">SLA Document For Finance</a></li>
<li><a onClick="openTab(this)" href="#" name="documents/Helpdesk-SLA-Admin-Indore.pdf">SLA Document For Admin Indore</a></li>
<li><a onClick="openTab(this)" href="#" name="documents/Helpdesk-SLA-Admin-Pune.pdf">SLA Document For Admin Pune</a></li>
<li><a onClick="openTab(this)" href="#" name="/documents/Helpdesk-SLA-Chennai-Pune.pdf" target="_blank">SLA Document For Admin Chennai</a></li>
<li><a onClick="openTab(this)" href="#" name="documents/Helpdesk-SLA-HR.pdf">SLA Document For HR</a></li>
<li><a onClick="openTab(this)" href="#" name="documents/Helpdesk-SLA-PMO.pdf">SLA Document For PMO</a></li>
</ul>
</div>
</div></div>
<?php require(STAFFINC_DIR.'footer.inc.php'); ?>
