jQuery(document).ready(function($) {
  $("#chronoform-bilet1").gvalidate();

  $("#chronoform-bilet1").find(":input").on("invalid.gvalidation", function() {
    var field = $(this);
    if (field.is(":hidden")) {
      if (field.closest(".tab-pane").length > 0) {
        var tab_id = field.closest(".tab-pane").attr("id");
        $('a[href="#' + tab_id + '"]').closest(".nav").gtabs("get").show($('a[href="#' + tab_id + '"]'));
      }
      if (field.closest(".panel-collapse").length > 0) {
        var slider_id = field.closest(".panel-collapse").attr("id");
        $('a[href="#' + slider_id + '"]').closest(".panel-group").gsliders("get").show($('a[href="#' + slider_id + '"]'));
      }
    }
    if (field.data("wysiwyg") == "1") {
      field.data("gvalidation-target", field.parent());
    }
  });
  $("#chronoform-bilet1").on("success.gvalidation", function(e) {
    if ($("#chronoform-bilet1").data("gvalidate_success")) {
      var gvalidate_success = $("#chronoform-bilet1").data("gvalidate_success");
      if (gvalidate_success in window) {
        window[gvalidate_success](e, $("#chronoform-bilet1"));
      }
    }
  });
  $("#chronoform-bilet1").on("fail.gvalidation", function(e) {
    if ($("#chronoform-bilet1").data("gvalidate_fail")) {
      var gvalidate_fail = $("#chronoform-bilet1").data("gvalidate_fail");
      if (gvalidate_fail in window) {
        window[gvalidate_fail](e, $("#chronoform-bilet1"));
      }
    }
  });


  function chronoforms_validation_signs(formObj) {
    formObj.find(":input[class*=validate]").each(function() {
      if ($(this).attr("class").indexOf("required") >= 0 || $(this).attr("class").indexOf("group") >= 0) {
        var required_parent = [];
        if ($(this).closest(".gcore-subinput-container").length > 0) {
          var required_parent = $(this).closest(".gcore-subinput-container");
        } else if ($(this).closest(".gcore-form-row, .form-group").length > 0) {
          var required_parent = $(this).closest(".gcore-form-row, .form-group");
        }
        if (required_parent.length > 0) {
          var required_label = required_parent.find("label");
          if (required_label.length > 0 && !required_label.first().hasClass("required_label")) {
            required_label.first().addClass("required_label");
            required_label.first().html(required_label.first().html() + " <i class='fa fa-asterisk' style='color:#ff0000; font-size:9px; vertical-align:top;'></i>");
          }
        }
      }
    });
  }
  chronoforms_validation_signs($("#chronoform-bilet1"));


  function chronoforms_data_tooltip(formObj) {
    formObj.find(":input").each(function() {
      if ($(this).data("tooltip") && $(this).closest(".gcore-input, .gcore-input-wide").length > 0) {
        var tipped_parent = [];
        if ($(this).closest(".gcore-subinput-container").length > 0) {
          var tipped_parent = $(this).closest(".gcore-subinput-container");
        } else if ($(this).closest(".gcore-form-row, .form-group").length > 0) {
          var tipped_parent = $(this).closest(".gcore-form-row, .form-group");
        }
        if (tipped_parent.length > 0) {
          var tipped_label = tipped_parent.find("label");
          if (tipped_label.length > 0 && !tipped_label.first().hasClass("tipped_label")) {
            tipped_label.first().addClass("tipped_label");
            var $tip = $("<i class='fa fa-exclamation-circle input-tooltip' style='color:#2693FF; padding-left:5px;'></i>");
            $tip.data("content", $(this).data("tooltip"));
            tipped_label.first().append($tip);
          }
        }
      }
    });
    formObj.find(".input-tooltip").gtooltip();
  }
  chronoforms_data_tooltip($("#chronoform-bilet1"));


  function chronoforms_data_loadstate(formObj) {
    formObj.find(':input[data-load-state="disabled"]').prop("disabled", true);
    formObj.find('*[data-load-state="hidden"]').css("display", "none");
    formObj.find(':input[data-load-state="hidden_parent"]').each(function() {
      if ($(this).closest(".gcore-subinput-container").length > 0) {
        $(this).closest(".gcore-subinput-container").css("display", "none");
      } else if ($(this).closest(".gcore-form-row").length > 0) {
        $(this).closest(".gcore-form-row").css("display", "none");
      }
    });
  }
  chronoforms_data_loadstate($("#chronoform-bilet1"));

  $(":input").inputmask();

  function chronoforms_fields_events() {}
  chronoforms_fields_events();

  function chronoforms_pageload_fields_events() {

  }
  chronoforms_pageload_fields_events();
});

jQuery(document).ready(function($) {
  $('[data-g-toggle="tab"]').closest('.nav').gtabs({
    'pane_selector': '.tab-pane',
    'tab_selector': '[data-g-toggle="tab"]',
  });
  $('[data-g-toggle="collapse"]').closest('.panel-group').gsliders({
    'pane_selector': '.panel-collapse',
    'tab_selector': '[data-g-toggle="collapse"]',
    'active_pane_class': 'in',
  });

  $('[data-g-toggle="modal"]').on('click', function(e) {
    e.preventDefault();
    $modal = $($(this).data('g-target'));
    $modal.gmodal({
      'close_selector': '[data-g-dismiss="modal"]',
    });
    $modal.gmodal('open');
  });

  $('.gdropdown').gdropdown();
  $('[data-g-toggle="dropdown"]').on('click', function(e) {
    e.preventDefault();
    $(this).parent().find('.gdropdown').gdropdown('toggle');
  });
});
jQuery(document).ready(function($) {
  $("#chronoform-bilet2").gvalidate();

  $("#chronoform-bilet2").find(":input").on("invalid.gvalidation", function() {
    var field = $(this);
    if (field.is(":hidden")) {
      if (field.closest(".tab-pane").length > 0) {
        var tab_id = field.closest(".tab-pane").attr("id");
        $('a[href="#' + tab_id + '"]').closest(".nav").gtabs("get").show($('a[href="#' + tab_id + '"]'));
      }
      if (field.closest(".panel-collapse").length > 0) {
        var slider_id = field.closest(".panel-collapse").attr("id");
        $('a[href="#' + slider_id + '"]').closest(".panel-group").gsliders("get").show($('a[href="#' + slider_id + '"]'));
      }
    }
    if (field.data("wysiwyg") == "1") {
      field.data("gvalidation-target", field.parent());
    }
  });
  $("#chronoform-bilet2").on("success.gvalidation", function(e) {
    if ($("#chronoform-bilet2").data("gvalidate_success")) {
      var gvalidate_success = $("#chronoform-bilet2").data("gvalidate_success");
      if (gvalidate_success in window) {
        window[gvalidate_success](e, $("#chronoform-bilet2"));
      }
    }
  });
  $("#chronoform-bilet2").on("fail.gvalidation", function(e) {
    if ($("#chronoform-bilet2").data("gvalidate_fail")) {
      var gvalidate_fail = $("#chronoform-bilet2").data("gvalidate_fail");
      if (gvalidate_fail in window) {
        window[gvalidate_fail](e, $("#chronoform-bilet2"));
      }
    }
  });


  function chronoforms_validation_signs(formObj) {
    formObj.find(":input[class*=validate]").each(function() {
      if ($(this).attr("class").indexOf("required") >= 0 || $(this).attr("class").indexOf("group") >= 0) {
        var required_parent = [];
        if ($(this).closest(".gcore-subinput-container").length > 0) {
          var required_parent = $(this).closest(".gcore-subinput-container");
        } else if ($(this).closest(".gcore-form-row, .form-group").length > 0) {
          var required_parent = $(this).closest(".gcore-form-row, .form-group");
        }
        if (required_parent.length > 0) {
          var required_label = required_parent.find("label");
          if (required_label.length > 0 && !required_label.first().hasClass("required_label")) {
            required_label.first().addClass("required_label");
            required_label.first().html(required_label.first().html() + " <i class='fa fa-asterisk' style='color:#ff0000; font-size:9px; vertical-align:top;'></i>");
          }
        }
      }
    });
  }
  chronoforms_validation_signs($("#chronoform-bilet2"));


  function chronoforms_data_tooltip(formObj) {
    formObj.find(":input").each(function() {
      if ($(this).data("tooltip") && $(this).closest(".gcore-input, .gcore-input-wide").length > 0) {
        var tipped_parent = [];
        if ($(this).closest(".gcore-subinput-container").length > 0) {
          var tipped_parent = $(this).closest(".gcore-subinput-container");
        } else if ($(this).closest(".gcore-form-row, .form-group").length > 0) {
          var tipped_parent = $(this).closest(".gcore-form-row, .form-group");
        }
        if (tipped_parent.length > 0) {
          var tipped_label = tipped_parent.find("label");
          if (tipped_label.length > 0 && !tipped_label.first().hasClass("tipped_label")) {
            tipped_label.first().addClass("tipped_label");
            var $tip = $("<i class='fa fa-exclamation-circle input-tooltip' style='color:#2693FF; padding-left:5px;'></i>");
            $tip.data("content", $(this).data("tooltip"));
            tipped_label.first().append($tip);
          }
        }
      }
    });
    formObj.find(".input-tooltip").gtooltip();
  }
  chronoforms_data_tooltip($("#chronoform-bilet2"));


  function chronoforms_data_loadstate(formObj) {
    formObj.find(':input[data-load-state="disabled"]').prop("disabled", true);
    formObj.find('*[data-load-state="hidden"]').css("display", "none");
    formObj.find(':input[data-load-state="hidden_parent"]').each(function() {
      if ($(this).closest(".gcore-subinput-container").length > 0) {
        $(this).closest(".gcore-subinput-container").css("display", "none");
      } else if ($(this).closest(".gcore-form-row").length > 0) {
        $(this).closest(".gcore-form-row").css("display", "none");
      }
    });
  }
  chronoforms_data_loadstate($("#chronoform-bilet2"));

  $(":input").inputmask();

  function chronoforms_fields_events() {}
  chronoforms_fields_events();

  function chronoforms_pageload_fields_events() {

  }
  chronoforms_pageload_fields_events();
});
jQuery(document).ready(function($) {
  $("#chronoform-bilet3").gvalidate();

  $("#chronoform-bilet3").find(":input").on("invalid.gvalidation", function() {
    var field = $(this);
    if (field.is(":hidden")) {
      if (field.closest(".tab-pane").length > 0) {
        var tab_id = field.closest(".tab-pane").attr("id");
        $('a[href="#' + tab_id + '"]').closest(".nav").gtabs("get").show($('a[href="#' + tab_id + '"]'));
      }
      if (field.closest(".panel-collapse").length > 0) {
        var slider_id = field.closest(".panel-collapse").attr("id");
        $('a[href="#' + slider_id + '"]').closest(".panel-group").gsliders("get").show($('a[href="#' + slider_id + '"]'));
      }
    }
    if (field.data("wysiwyg") == "1") {
      field.data("gvalidation-target", field.parent());
    }
  });
  $("#chronoform-bilet3").on("success.gvalidation", function(e) {
    if ($("#chronoform-bilet3").data("gvalidate_success")) {
      var gvalidate_success = $("#chronoform-bilet3").data("gvalidate_success");
      if (gvalidate_success in window) {
        window[gvalidate_success](e, $("#chronoform-bilet3"));
      }
    }
  });
  $("#chronoform-bilet3").on("fail.gvalidation", function(e) {
    if ($("#chronoform-bilet3").data("gvalidate_fail")) {
      var gvalidate_fail = $("#chronoform-bilet3").data("gvalidate_fail");
      if (gvalidate_fail in window) {
        window[gvalidate_fail](e, $("#chronoform-bilet3"));
      }
    }
  });


  function chronoforms_validation_signs(formObj) {
    formObj.find(":input[class*=validate]").each(function() {
      if ($(this).attr("class").indexOf("required") >= 0 || $(this).attr("class").indexOf("group") >= 0) {
        var required_parent = [];
        if ($(this).closest(".gcore-subinput-container").length > 0) {
          var required_parent = $(this).closest(".gcore-subinput-container");
        } else if ($(this).closest(".gcore-form-row, .form-group").length > 0) {
          var required_parent = $(this).closest(".gcore-form-row, .form-group");
        }
        if (required_parent.length > 0) {
          var required_label = required_parent.find("label");
          if (required_label.length > 0 && !required_label.first().hasClass("required_label")) {
            required_label.first().addClass("required_label");
            required_label.first().html(required_label.first().html() + " <i class='fa fa-asterisk' style='color:#ff0000; font-size:9px; vertical-align:top;'></i>");
          }
        }
      }
    });
  }
  chronoforms_validation_signs($("#chronoform-bilet3"));


  function chronoforms_data_tooltip(formObj) {
    formObj.find(":input").each(function() {
      if ($(this).data("tooltip") && $(this).closest(".gcore-input, .gcore-input-wide").length > 0) {
        var tipped_parent = [];
        if ($(this).closest(".gcore-subinput-container").length > 0) {
          var tipped_parent = $(this).closest(".gcore-subinput-container");
        } else if ($(this).closest(".gcore-form-row, .form-group").length > 0) {
          var tipped_parent = $(this).closest(".gcore-form-row, .form-group");
        }
        if (tipped_parent.length > 0) {
          var tipped_label = tipped_parent.find("label");
          if (tipped_label.length > 0 && !tipped_label.first().hasClass("tipped_label")) {
            tipped_label.first().addClass("tipped_label");
            var $tip = $("<i class='fa fa-exclamation-circle input-tooltip' style='color:#2693FF; padding-left:5px;'></i>");
            $tip.data("content", $(this).data("tooltip"));
            tipped_label.first().append($tip);
          }
        }
      }
    });
    formObj.find(".input-tooltip").gtooltip();
  }
  chronoforms_data_tooltip($("#chronoform-bilet3"));


  function chronoforms_data_loadstate(formObj) {
    formObj.find(':input[data-load-state="disabled"]').prop("disabled", true);
    formObj.find('*[data-load-state="hidden"]').css("display", "none");
    formObj.find(':input[data-load-state="hidden_parent"]').each(function() {
      if ($(this).closest(".gcore-subinput-container").length > 0) {
        $(this).closest(".gcore-subinput-container").css("display", "none");
      } else if ($(this).closest(".gcore-form-row").length > 0) {
        $(this).closest(".gcore-form-row").css("display", "none");
      }
    });
  }
  chronoforms_data_loadstate($("#chronoform-bilet3"));

  $(":input").inputmask();

  function chronoforms_fields_events() {}
  chronoforms_fields_events();

  function chronoforms_pageload_fields_events() {

  }
  chronoforms_pageload_fields_events();
});
jQuery(document).ready(function($) {
  $("#chronoform-bilet4").gvalidate();

  $("#chronoform-bilet4").find(":input").on("invalid.gvalidation", function() {
    var field = $(this);
    if (field.is(":hidden")) {
      if (field.closest(".tab-pane").length > 0) {
        var tab_id = field.closest(".tab-pane").attr("id");
        $('a[href="#' + tab_id + '"]').closest(".nav").gtabs("get").show($('a[href="#' + tab_id + '"]'));
      }
      if (field.closest(".panel-collapse").length > 0) {
        var slider_id = field.closest(".panel-collapse").attr("id");
        $('a[href="#' + slider_id + '"]').closest(".panel-group").gsliders("get").show($('a[href="#' + slider_id + '"]'));
      }
    }
    if (field.data("wysiwyg") == "1") {
      field.data("gvalidation-target", field.parent());
    }
  });
  $("#chronoform-bilet4").on("success.gvalidation", function(e) {
    if ($("#chronoform-bilet4").data("gvalidate_success")) {
      var gvalidate_success = $("#chronoform-bilet4").data("gvalidate_success");
      if (gvalidate_success in window) {
        window[gvalidate_success](e, $("#chronoform-bilet4"));
      }
    }
  });
  $("#chronoform-bilet4").on("fail.gvalidation", function(e) {
    if ($("#chronoform-bilet4").data("gvalidate_fail")) {
      var gvalidate_fail = $("#chronoform-bilet4").data("gvalidate_fail");
      if (gvalidate_fail in window) {
        window[gvalidate_fail](e, $("#chronoform-bilet4"));
      }
    }
  });


  function chronoforms_validation_signs(formObj) {
    formObj.find(":input[class*=validate]").each(function() {
      if ($(this).attr("class").indexOf("required") >= 0 || $(this).attr("class").indexOf("group") >= 0) {
        var required_parent = [];
        if ($(this).closest(".gcore-subinput-container").length > 0) {
          var required_parent = $(this).closest(".gcore-subinput-container");
        } else if ($(this).closest(".gcore-form-row, .form-group").length > 0) {
          var required_parent = $(this).closest(".gcore-form-row, .form-group");
        }
        if (required_parent.length > 0) {
          var required_label = required_parent.find("label");
          if (required_label.length > 0 && !required_label.first().hasClass("required_label")) {
            required_label.first().addClass("required_label");
            required_label.first().html(required_label.first().html() + " <i class='fa fa-asterisk' style='color:#ff0000; font-size:9px; vertical-align:top;'></i>");
          }
        }
      }
    });
  }
  chronoforms_validation_signs($("#chronoform-bilet4"));


  function chronoforms_data_tooltip(formObj) {
    formObj.find(":input").each(function() {
      if ($(this).data("tooltip") && $(this).closest(".gcore-input, .gcore-input-wide").length > 0) {
        var tipped_parent = [];
        if ($(this).closest(".gcore-subinput-container").length > 0) {
          var tipped_parent = $(this).closest(".gcore-subinput-container");
        } else if ($(this).closest(".gcore-form-row, .form-group").length > 0) {
          var tipped_parent = $(this).closest(".gcore-form-row, .form-group");
        }
        if (tipped_parent.length > 0) {
          var tipped_label = tipped_parent.find("label");
          if (tipped_label.length > 0 && !tipped_label.first().hasClass("tipped_label")) {
            tipped_label.first().addClass("tipped_label");
            var $tip = $("<i class='fa fa-exclamation-circle input-tooltip' style='color:#2693FF; padding-left:5px;'></i>");
            $tip.data("content", $(this).data("tooltip"));
            tipped_label.first().append($tip);
          }
        }
      }
    });
    formObj.find(".input-tooltip").gtooltip();
  }
  chronoforms_data_tooltip($("#chronoform-bilet4"));


  function chronoforms_data_loadstate(formObj) {
    formObj.find(':input[data-load-state="disabled"]').prop("disabled", true);
    formObj.find('*[data-load-state="hidden"]').css("display", "none");
    formObj.find(':input[data-load-state="hidden_parent"]').each(function() {
      if ($(this).closest(".gcore-subinput-container").length > 0) {
        $(this).closest(".gcore-subinput-container").css("display", "none");
      } else if ($(this).closest(".gcore-form-row").length > 0) {
        $(this).closest(".gcore-form-row").css("display", "none");
      }
    });
  }
  chronoforms_data_loadstate($("#chronoform-bilet4"));

  $(":input").inputmask();

  function chronoforms_fields_events() {}
  chronoforms_fields_events();

  function chronoforms_pageload_fields_events() {

  }
  chronoforms_pageload_fields_events();
});
jQuery(document).ready(function($) {
  $("#chronoform-bilet5").gvalidate();

  $("#chronoform-bilet5").find(":input").on("invalid.gvalidation", function() {
    var field = $(this);
    if (field.is(":hidden")) {
      if (field.closest(".tab-pane").length > 0) {
        var tab_id = field.closest(".tab-pane").attr("id");
        $('a[href="#' + tab_id + '"]').closest(".nav").gtabs("get").show($('a[href="#' + tab_id + '"]'));
      }
      if (field.closest(".panel-collapse").length > 0) {
        var slider_id = field.closest(".panel-collapse").attr("id");
        $('a[href="#' + slider_id + '"]').closest(".panel-group").gsliders("get").show($('a[href="#' + slider_id + '"]'));
      }
    }
    if (field.data("wysiwyg") == "1") {
      field.data("gvalidation-target", field.parent());
    }
  });
  $("#chronoform-bilet5").on("success.gvalidation", function(e) {
    if ($("#chronoform-bilet5").data("gvalidate_success")) {
      var gvalidate_success = $("#chronoform-bilet5").data("gvalidate_success");
      if (gvalidate_success in window) {
        window[gvalidate_success](e, $("#chronoform-bilet5"));
      }
    }
  });
  $("#chronoform-bilet5").on("fail.gvalidation", function(e) {
    if ($("#chronoform-bilet5").data("gvalidate_fail")) {
      var gvalidate_fail = $("#chronoform-bilet5").data("gvalidate_fail");
      if (gvalidate_fail in window) {
        window[gvalidate_fail](e, $("#chronoform-bilet5"));
      }
    }
  });


  function chronoforms_validation_signs(formObj) {
    formObj.find(":input[class*=validate]").each(function() {
      if ($(this).attr("class").indexOf("required") >= 0 || $(this).attr("class").indexOf("group") >= 0) {
        var required_parent = [];
        if ($(this).closest(".gcore-subinput-container").length > 0) {
          var required_parent = $(this).closest(".gcore-subinput-container");
        } else if ($(this).closest(".gcore-form-row, .form-group").length > 0) {
          var required_parent = $(this).closest(".gcore-form-row, .form-group");
        }
        if (required_parent.length > 0) {
          var required_label = required_parent.find("label");
          if (required_label.length > 0 && !required_label.first().hasClass("required_label")) {
            required_label.first().addClass("required_label");
            required_label.first().html(required_label.first().html() + " <i class='fa fa-asterisk' style='color:#ff0000; font-size:9px; vertical-align:top;'></i>");
          }
        }
      }
    });
  }
  chronoforms_validation_signs($("#chronoform-bilet5"));


  function chronoforms_data_tooltip(formObj) {
    formObj.find(":input").each(function() {
      if ($(this).data("tooltip") && $(this).closest(".gcore-input, .gcore-input-wide").length > 0) {
        var tipped_parent = [];
        if ($(this).closest(".gcore-subinput-container").length > 0) {
          var tipped_parent = $(this).closest(".gcore-subinput-container");
        } else if ($(this).closest(".gcore-form-row, .form-group").length > 0) {
          var tipped_parent = $(this).closest(".gcore-form-row, .form-group");
        }
        if (tipped_parent.length > 0) {
          var tipped_label = tipped_parent.find("label");
          if (tipped_label.length > 0 && !tipped_label.first().hasClass("tipped_label")) {
            tipped_label.first().addClass("tipped_label");
            var $tip = $("<i class='fa fa-exclamation-circle input-tooltip' style='color:#2693FF; padding-left:5px;'></i>");
            $tip.data("content", $(this).data("tooltip"));
            tipped_label.first().append($tip);
          }
        }
      }
    });
    formObj.find(".input-tooltip").gtooltip();
  }
  chronoforms_data_tooltip($("#chronoform-bilet5"));


  function chronoforms_data_loadstate(formObj) {
    formObj.find(':input[data-load-state="disabled"]').prop("disabled", true);
    formObj.find('*[data-load-state="hidden"]').css("display", "none");
    formObj.find(':input[data-load-state="hidden_parent"]').each(function() {
      if ($(this).closest(".gcore-subinput-container").length > 0) {
        $(this).closest(".gcore-subinput-container").css("display", "none");
      } else if ($(this).closest(".gcore-form-row").length > 0) {
        $(this).closest(".gcore-form-row").css("display", "none");
      }
    });
  }
  chronoforms_data_loadstate($("#chronoform-bilet5"));

  $(":input").inputmask();

  function chronoforms_fields_events() {}
  chronoforms_fields_events();

  function chronoforms_pageload_fields_events() {

  }
  chronoforms_pageload_fields_events();
});
jQuery(document).ready(function($) {
  $("#chronoform-bilet6").gvalidate();

  $("#chronoform-bilet6").find(":input").on("invalid.gvalidation", function() {
    var field = $(this);
    if (field.is(":hidden")) {
      if (field.closest(".tab-pane").length > 0) {
        var tab_id = field.closest(".tab-pane").attr("id");
        $('a[href="#' + tab_id + '"]').closest(".nav").gtabs("get").show($('a[href="#' + tab_id + '"]'));
      }
      if (field.closest(".panel-collapse").length > 0) {
        var slider_id = field.closest(".panel-collapse").attr("id");
        $('a[href="#' + slider_id + '"]').closest(".panel-group").gsliders("get").show($('a[href="#' + slider_id + '"]'));
      }
    }
    if (field.data("wysiwyg") == "1") {
      field.data("gvalidation-target", field.parent());
    }
  });
  $("#chronoform-bilet6").on("success.gvalidation", function(e) {
    if ($("#chronoform-bilet6").data("gvalidate_success")) {
      var gvalidate_success = $("#chronoform-bilet6").data("gvalidate_success");
      if (gvalidate_success in window) {
        window[gvalidate_success](e, $("#chronoform-bilet6"));
      }
    }
  });
  $("#chronoform-bilet6").on("fail.gvalidation", function(e) {
    if ($("#chronoform-bilet6").data("gvalidate_fail")) {
      var gvalidate_fail = $("#chronoform-bilet6").data("gvalidate_fail");
      if (gvalidate_fail in window) {
        window[gvalidate_fail](e, $("#chronoform-bilet6"));
      }
    }
  });


  function chronoforms_validation_signs(formObj) {
    formObj.find(":input[class*=validate]").each(function() {
      if ($(this).attr("class").indexOf("required") >= 0 || $(this).attr("class").indexOf("group") >= 0) {
        var required_parent = [];
        if ($(this).closest(".gcore-subinput-container").length > 0) {
          var required_parent = $(this).closest(".gcore-subinput-container");
        } else if ($(this).closest(".gcore-form-row, .form-group").length > 0) {
          var required_parent = $(this).closest(".gcore-form-row, .form-group");
        }
        if (required_parent.length > 0) {
          var required_label = required_parent.find("label");
          if (required_label.length > 0 && !required_label.first().hasClass("required_label")) {
            required_label.first().addClass("required_label");
            required_label.first().html(required_label.first().html() + " <i class='fa fa-asterisk' style='color:#ff0000; font-size:9px; vertical-align:top;'></i>");
          }
        }
      }
    });
  }
  chronoforms_validation_signs($("#chronoform-bilet6"));


  function chronoforms_data_tooltip(formObj) {
    formObj.find(":input").each(function() {
      if ($(this).data("tooltip") && $(this).closest(".gcore-input, .gcore-input-wide").length > 0) {
        var tipped_parent = [];
        if ($(this).closest(".gcore-subinput-container").length > 0) {
          var tipped_parent = $(this).closest(".gcore-subinput-container");
        } else if ($(this).closest(".gcore-form-row, .form-group").length > 0) {
          var tipped_parent = $(this).closest(".gcore-form-row, .form-group");
        }
        if (tipped_parent.length > 0) {
          var tipped_label = tipped_parent.find("label");
          if (tipped_label.length > 0 && !tipped_label.first().hasClass("tipped_label")) {
            tipped_label.first().addClass("tipped_label");
            var $tip = $("<i class='fa fa-exclamation-circle input-tooltip' style='color:#2693FF; padding-left:5px;'></i>");
            $tip.data("content", $(this).data("tooltip"));
            tipped_label.first().append($tip);
          }
        }
      }
    });
    formObj.find(".input-tooltip").gtooltip();
  }
  chronoforms_data_tooltip($("#chronoform-bilet6"));


  function chronoforms_data_loadstate(formObj) {
    formObj.find(':input[data-load-state="disabled"]').prop("disabled", true);
    formObj.find('*[data-load-state="hidden"]').css("display", "none");
    formObj.find(':input[data-load-state="hidden_parent"]').each(function() {
      if ($(this).closest(".gcore-subinput-container").length > 0) {
        $(this).closest(".gcore-subinput-container").css("display", "none");
      } else if ($(this).closest(".gcore-form-row").length > 0) {
        $(this).closest(".gcore-form-row").css("display", "none");
      }
    });
  }
  chronoforms_data_loadstate($("#chronoform-bilet6"));

  $(":input").inputmask();

  function chronoforms_fields_events() {}
  chronoforms_fields_events();

  function chronoforms_pageload_fields_events() {

  }
  chronoforms_pageload_fields_events();
});