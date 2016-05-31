<?php include('perch/runtime.php'); ?>

<!-- Head -->
<?php perch_layout('global/head'); ?>

  <!-- Head -->
  <?php perch_layout('global/nav'); ?>

    <main id="panel">

      <!-- Header -->
      <?php perch_content('header'); ?>

      <!-- Quote -->
      <?php perch_content('quote'); ?>      

      <!-- Enquiry -->
      <section class="enquiry">
        <div class="container">
          <a href="mailto:info@mcmillansengineering.co.uk?subject=Spare parts enquiry" class="btn">Enquire about spare parts</a>
        </div>
      </section>

      <!-- Footer -->
      <?php perch_layout('global/footer'); ?>

    <!-- Bottom -->
    <?php perch_layout('global/bottom'); ?>