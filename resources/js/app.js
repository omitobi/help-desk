import './bootstrap';

import jQuery from '$';
window.$ = jQuery;

import 'flowbite';

import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@fortawesome/fontawesome-free/scss/v4-shims.scss';

import 'magnific-popup/dist/magnific-popup.css';
import 'magnific-popup/dist/jquery.magnific-popup.min';

import Alpine from 'alpinejs'
import FormsAlpinePlugin from '../../vendor/filament/forms/dist/module.esm'
import NotificationsAlpinePlugin from '../../vendor/filament/notifications/dist/module.esm'

Alpine.plugin(FormsAlpinePlugin)
Alpine.plugin(NotificationsAlpinePlugin)

window.Alpine = Alpine

Alpine.start()

// Open image as magnific popup
if ($('.magnificpopup-container').length) {
    $('.magnificpopup-container').magnificPopup({
        type: 'image',
        delegate: 'img',
        gallery: {
            enabled: true
        },
        callbacks: {
            elementParse: function (qw) {
                qw.src = qw.el.attr('src');
            }
        },
        image: {
            titleSrc: function (item) {
                let title = '';
                if (item.el.closest('figure').children('figcaption'))
                    title = item.el.closest('figure').children('figcaption').text();
                return title;
            }
        }
    });
}
