    </main>

    <script src="assets/components/jquery/jquery.min.js"></script>
    <script src="assets/js/scripts.min.js"></script>
    <script src="assets/js/swiper.jquery.min.js"></script>
    <script src="assets/js/velocity.min.js"></script>
    <script src="assets/js/slideout.min.js"></script>
    <script src="assets/js/dropit.js"></script>
    <script src="assets/js/jquery.smartmenus.min.js"></script>
    <script src="assets/js/jquery.swipebox.min.js"></script>
    <script src="assets/js/slick.min.js"></script>

    <script>
      var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'side': 'right',
        'padding': 256,
        'touch': false,
        'tolerance': 70
      });
    </script>

    <script>
      $('#main-menu').smartmenus();
    </script>

    <script>
      $('.menu').dropit();
    </script>

    <script>
      $( '.swipebox' ).swipebox({
          loopAtEnd: true
      });
    </script>

    <?php perch_content('google_analytics'); ?>

  </body>
</html>