<?php
require('client.inc.php');

require_once INCLUDE_DIR . 'class.page.php';
$nav->setActiveNav('sla');

require(CLIENTINC_DIR.'header.inc.php');
?>
<div id="landing_page">
<?php //include CLIENTINC_DIR.'templates/sidebar.tmpl.php'; ?>
<div class="main-content">
<h1>MEDICLAIM</h1>
<p>MEDICLAIM stands for Service Level Agreement. It is a contractual agreement between a service provider and its customer that defines the level of service that the provider is expected to deliver. The agreement outlines the service standards, quality, and performance metrics that the service provider will adhere to.

<br><br>An SLA typically includes specific targets for various aspects of the service, such as availability, uptime, response time, resolution time, and customer support. It also defines the consequences that the service provider will face if it fails to meet the agreed-upon service levels, such as financial penalties, service credits, or termination of the contract.</p>
<div class="sla_doc">
<ul>
  <!--<li><a href="/documents/SLA-Document-Accounts.pdf" target="_blank">SLA Document For Account</a></li>
  <li><a href="/documents/SLA-Document-Admin-Indore-SLA.pdf" target="_blank">SLA Document For Admin Indore</a></li>
  <li><a href="/documents/SLA-Document-Admin-Pune-SLA.pdf" target="_blank">SLA Document For Admin Pune</a></li>
   <li><a href="/documents/SLA-Document-HR-SLA.pdf" target="_blank">SLA Document For HR</a></li>-->
<li><a href="#" target="_blank">SLA Document For Mediclaim</a></li>

</ul>
</div>
</div></div>
<?php require(CLIENTINC_DIR.'footer.inc.php'); ?>
