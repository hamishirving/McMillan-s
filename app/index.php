<?php include('perch/runtime.php'); ?>

<!-- Head -->
<?php perch_layout('global/head'); ?>

  <!-- Head -->
  <?php perch_layout('global/nav'); ?>

    <main id="panel">

      <!-- Header -->
      <?php perch_content('header'); ?>
      
      <!-- Quote -->
      <?php perch_content_create('quote', array(
          'template' => 'quote.html'
      ));?>
      <?php perch_content_custom('quote', array(
          'template'=>'quote.html'
      ));?>

      <!-- Experience -->
      <?php perch_content('experience'); ?>

      <!-- Partners -->
      <?php perch_content('partners'); ?>

      <!-- Footer -->
      <?php perch_layout('global/footer'); ?>

    <!-- Bottom -->
    <?php perch_layout('global/bottom'); ?>