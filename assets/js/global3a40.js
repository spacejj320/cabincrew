// Trigger Primary Menu on Mobile view
jQuery(".fn-header-bottom__content-left .mega-menu-toggle-block").click(function () {
    jQuery(this).closest(".fn-header-bottom__content-left").find("#mega-menu-top-header-menu").prepend('<li class="fn-megamenu-close-wrapper"><span class="fn-megamenu-close-btn">Close <i class="icon-close"></i></span></li>');
    jQuery(".fn-header-bottom__content-left").find(".mega-menu-toggle").append('<div class="fn-header-bottom__content-left-contact-details"></div>');
    jQuery(".fn-header-top").find(".fn-header-top__contact-detail").clone().appendTo(".fn-header-bottom__content-left-contact-details");
    jQuery(".fn-header-top").find(".fn-social-media-list").clone().appendTo(".fn-header-bottom__content-left-contact-details");
});
// Close Primary Menu on Mobile View
jQuery("body").on('click', '.fn-megamenu-close-btn', function () {
    jQuery(this).closest(".fn-header-bottom__content-left").find(".mega-menu-toggle").removeClass("mega-menu-open");
    jQuery(this).closest(".fn-header-bottom__content-left").find(".fn-megamenu-close-wrapper").remove();
    jQuery(".fn-header-bottom__content-left-contact-details").remove();
});
// Script to Truncate card title
// var cardTitle = document.getElementsByClassName('.fn-card__content__main-title'),
//     cardPara = document.getElementsByTagName('.fn-card__content p');

// $clamp(cardTitle, { clamp: 1, useNativeClamp: false });
// $clamp(cardPara, { clamp: 10, useNativeClamp: false, animate: true });

jQuery(document).ready(function () {
    // jQuery('[data-toggle="datepicker"]').datepicker();

    jQuery('.wpcf7-select').select2({
        // placeholder: "choose qualification",
        minimumResultsForSearch: Infinity
    });
    // jQuery('.js-fn-select-center').select2({
    //     // placeholder: "choose a center",
    //     minimumResultsForSearch: Infinity
    // });
})

// Enquire Form Input Focus Interaction

jQuery(".fn-enquire-popup__form-wrapper .wpcf7-form-control").focusin(function () {
    jQuery(this).closest(".fn-wp-contact-form-field__inner-wrap").addClass("fn-focus-in fn-focus-color");
});

jQuery(".fn-enquire-popup__form-wrapper .wpcf7-form-control").focusout(function () {
    var inp = jQuery(this);
    inp.closest(".fn-wp-contact-form-field__inner-wrap").removeClass("fn-focus-color");
    if (inp.val().length == 0) {
        inp.closest(".fn-wp-contact-form-field__inner-wrap").removeClass("fn-focus-in");
    }
});
jQuery(".wpcf7-date").focusout(function () {
       jQuery(this).closest(".fn-wp-contact-form-field__inner-wrap").addClass("fn-focus-in"); 
   
});
// jQuery('#enquireModal').on('shown.bs.modal', function () {
//     jQuery('.wpcf7-date').datepicker({
//         format: "dd/mm/yyyy",
//         startDate: "01-01-2015",
//         endDate: "01-01-2020",
//         todayBtn: "linked",
//         autoclose: true,
//         todayHighlight: true,
//         container: '#enquireModal modal-body'
//     });
// });
//jQuery('#enquireModal').on('shown.bs.modal', function () {
//    console.log("datepicker");
//    jQuery('.wpcf7-date').datepicker({
//        container: '#enquireModal modal-body'
//    });
//});


jQuery('.page-id-44 #form-franchise-tab').click();


jQuery("#name").on("keydown", function () {
	 var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || charCode == 8 || charCode == 32)

                return true;
            else
                return false;
	});

jQuery("#phone").on("keydown", function () {
	 var charCode = event.keyCode;

            if ((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 106) || charCode == 8 || charCode == 32)

                return true;
            else
                return false;
	});

jQuery("#name_general").on("keydown", function () {
	 var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || charCode == 8 || charCode == 32)

                return true;
            else
                return false;
	});

jQuery("#phone_general").on("keydown", function () {
	 var charCode = event.keyCode;

            if ((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 106) || charCode == 8 || charCode == 32)

                return true;
            else
                return false;
	});

jQuery("#city_general").on("keydown", function () {
	 var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || charCode == 8 || charCode == 32)

                return true;
            else
                return false;
	});

jQuery("#name_franchise").on("keydown", function () {
	 var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || charCode == 8 || charCode == 32)

                return true;
            else
                return false;
	});

jQuery("#phone_franchise").on("keydown", function () {
	 var charCode = event.keyCode;

            if ((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 106) || charCode == 8 || charCode == 32)

                return true;
            else
                return false;
	});

