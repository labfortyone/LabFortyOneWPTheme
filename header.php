<html>
  <head>
    <meta charset="utf-8" />
    <title><?php bloginfo('title')?></title>
    <link rel="stylesheet" type="text/css" media="all" href="reset.css" />
    <link rel="stylesheet" type="text/css" media="all" href="text.css" />
    <link rel="stylesheet" type="text/css" media="all" href="960.css" />
    <link rel="stylesheet" type="text/css" media="all" href="960_24_col.css" />
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url')?>" />
    <script src="wp-content/themes/LabFortyOneNew/script.js"></script>
    <?php wp_head()?>
  </head>

  <body>
    <header>
        <div class="container_12">
        <div class="grid_4 alpha">
            <div class="logo"></div>
        </div>
        <div class="grid_8 omega menu">
            <?php get_sidebar()?>
        </div>
        </div>
    </header>