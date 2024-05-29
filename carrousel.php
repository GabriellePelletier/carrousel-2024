<?php
    /**
     * Plugin Name: Carrousel
     * Author: Gabrielle Pelletier
     * Description: Affiche le carrousel associé à une galerie de Wordpress
     * Version: 1.0.0
     * Plugin URI: https://github.com/GabriellePelletier
     * Author URI: https://referenced.ca
     */


     function enqueue_style_script(){
      $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
      $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

      wp_enqueue_style(   'em_plugin_carrousel_css',
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css);

      wp_enqueue_script(  'em_plugin_carrousel_js',
                     plugin_dir_url(__FILE__) ."js/carrousel.js",
                     array(),
                     $version_js,
                     true);
     }

   //   Il faut que wp_head(); soit ajouté juste avant la balise </head>
   //   et que wp_footer(); soit ajouté juste avant la balsie </body>
     add_action('wp_enqueue_scripts', 'enqueue_style_script');

     function generer_html(){

        $html = '
        <br>
        <br>
        <button class="bouton__ouvrir">Ouvrir carrousel</button>
        <div class="carrousel">
         <b href="" class="carrousel__x">X</b>
         <button class="carrousel__arrow carrousel__arrow--prev">←</button>
         <button class="carrousel__arrow carrousel__arrow--next">→</button>
         <figure class="carrousel__figure"></figure>
         <form action="" class="carrousel__form"></form>
        </div>
        ';
        return $html;
     }
   //   [carrousel] juste après la galerie dans votre atricle ou page
   //   Quand la fonction the_content() rencontrera [carrousel] c'est à ce moment
   //   que le carrousel sera initialisé.
     add_shortcode('carrousel', 'generer_html');