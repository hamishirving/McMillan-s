<?php
    define('PERCH_LICENSE_KEY', 'P21603-WQJ207-BPK742-PMM389-KZK020');

    define("PERCH_DB_USERNAME", 'perch-admin');
    define("PERCH_DB_PASSWORD", 'export02');
    define("PERCH_DB_SERVER", "localhost");
    define("PERCH_DB_DATABASE", "McMillans");
    define("PERCH_DB_PREFIX", "perch2_");
    
    define('PERCH_TZ', 'UTC');

    define('PERCH_EMAIL_FROM', 'hamish.workstuff@gmail.com');
    define('PERCH_EMAIL_FROM_NAME', 'Hamish Irving');

    define('PERCH_LOGINPATH', '/perch');
    define('PERCH_PATH', str_replace(DIRECTORY_SEPARATOR.'config', '', __DIR__));
    define('PERCH_CORE', PERCH_PATH.DIRECTORY_SEPARATOR.'core');

    define('PERCH_RESFILEPATH', PERCH_PATH . DIRECTORY_SEPARATOR . 'resources');
    define('PERCH_RESPATH', PERCH_LOGINPATH . '/resources');
    
    define('PERCH_HTML5', true);
