<template>

  <div class="layout-default">

    <div class="layout-default-header">

      <div class="header">
        <div class="page-title">
          <div class="page-title-label">
            Woven Horizons
            <img style="margin: 0 0 3px 0;" src="/images/icon381.png">
          </div>
          <!-- <img class="page-title-img" src="/images/sword-small.png" />-->
        </div>
        <div class="inner-links">
          <div v-for="link in links" class="link">
            <NuxtLink :to="link.route">{{link.label}}</NuxtLink>
          </div>
        </div>

        <div class="social-links">
          <img @click="() => openLink('https://x.com/RoazhonGame')" class="social-link-img" src="/images/socialmedia/twitter.png" />
          <img @click="() => openLink('https://www.instagram.com/roazhongame/')" class="social-link-img" src="/images/socialmedia/instagram.png" />
          <img @click="() => openLink('https://www.facebook.com/profile.php?id=61553399873161')" class="social-link-img" src="/images/socialmedia/fb.png" />
          <img @click="() => openLink('https://www.youtube.com/@roazhongame')" class="social-link-img" src="/images/socialmedia/youtube.png" />
          <img @click="() => openLink('https://discord.gg/B4VP4aWT')" class="social-link-img" src="/images/socialmedia/discord.png" />
        </div>

        <div class="langs">
          <div :class="{ selected: 'fr' === currentLocale }" class="lang"> <!-- todo selected class -->
            <NuxtLink :to="switchLocalePath('fr')">
              <img src="/images/flags/France.png" />
            </NuxtLink>
          </div>

          <div :class="{ selected: 'en' === currentLocale }" class="lang">
            <NuxtLink :to="switchLocalePath('en')">
              <img src="/images/flags/United_Kingdom.png" />
            </NuxtLink>
          </div>

          <div :class="{ selected: 'es' === currentLocale }" class="lang">
            <NuxtLink :to="switchLocalePath('es')">
              <img src="/images/flags/Spain.png" />
            </NuxtLink>
          </div>

          <div :class="{ selected: 'de' === currentLocale }" class="lang">
            <NuxtLink :to="switchLocalePath('de')">
              <img src="/images/flags/Germany.png" />
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
    <div class="layout-default-content">
      <slot></slot>
    </div>

  </div>


</template>

<script setup>
/*import { useI18n, useLocalePath } from '#imports'
const { setLocale } = useI18n()*/

const switchLocalePath = useSwitchLocalePath()

const router = useRouter();
const links = [
  {
    label: 'Home',
    route: '/home'
  },
  {
    label: 'Blog',
    route: '/blog'
  },
  {
    label: 'FAQ',
    route: '/faq'
  }
];

import { useI18n } from 'vue-i18n';

// Obtenez les détails de la langue active
const { locale, availableLocales } = useI18n();

const locales = availableLocales.map(code => ({
  code,
  name: code.toUpperCase() // Vous pouvez personnaliser les noms ici
}));

const currentLocale = locale; // La langue actuellement activ

function openLink(url) {
  window.open(url, "_blank");
}

</script>

<style lang="scss" scoped>

  $header-height: 50px;

  .layout-default {

    .layout-default-header {

      // todo component
      .header {
        background-color: #001523; // #282828;
        color: white;

        display: flex;
        flex-wrap: wrap;
        padding: 0 35px;

        .page-title {
          display: flex;
          align-items: center;
          width: 250px;

          .page-title-label {
            font-family: 'antihero';
            font-size: 18px;
            position: absolute;
            z-index: 1;
            // $outline: 2px;
            // $outline-color: yellow;
            // text-shadow: -$outline - $outline 0 $outline-color, $outline - $outline 0 $outline-color, -$outline $outline 0 $outline-color, $outline $outline 0 $outline-color;

            display: flex
          ;
            align-items: center;
            justify-content: center;
            gap: 6px;

          }

          .page-title-img {
            /*height: 158px;
            position: absolute;
            top: -21px;
            rotate: -47deg;*/
            /*height: 68px;
            position: absolute;
            top: -2px;
            rotate: 42deg;
            left: 113px;*/
            height: 61px;
            position: absolute;
            top: 1px;
            rotate: 1deg;
            left: 124px;
          }
        }

        .inner-links {
          display: flex;
          justify-content: space-around;
          flex: 1;
          flex-wrap: wrap;
          .link {
            font-family: 'Open Sans', sans-serif;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 17px;
            list-style: none;
            height: $header-height;

            display: flex;
            align-items: center;
          }
        }
        .social-links {
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          .social-link-img {
            width: 25px;
            height: 25px;
            &:hover {
              cursor: pointer;
              opacity: 0.9;
            }
          }
        }
        .langs {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-right: 5%;
          .lang {
            filter: brightness(0.5);
            &:hover {
              cursor: pointer;
              opacity: 0.9;
            }
            &.selected {
              filter: brightness(1);
            }
          }
        }
      }

    }

    .layout-default-content {

    }
  }

</style>