ace.define("ace/theme/colabzy",["require","exports","module","ace/lib/dom"],function(e,t,n){


    t.isDark=!0;
    t.cssClass="ace-colabzy";
    t.cssText=".ace-colabzy .ace_gutter {background: #22282e;color: #FFF}.ace-colabzy .ace_print-margin {width: 1px;background: #555651}.ace-colabzy {background-color: #1e2126;color: #F8F8F2}.ace-colabzy .ace_cursor {color: #F8F8F0}.ace-colabzy .ace_marker-layer .ace_selection {background: #49483E}.ace-colabzy.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #1e2126;}.ace-colabzy .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-colabzy .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #49483E}.ace-colabzy .ace_marker-layer .ace_active-line {background: #202020}.ace-colabzy .ace_gutter-active-line {background-color: #22282e}.ace-colabzy .ace_marker-layer .ace_selected-word {border: 1px solid #49483E}.ace-colabzy .ace_invisible {color: #52524d}.ace-colabzy .ace_entity.ace_name.ace_tag,.ace-colabzy .ace_keyword,.ace-colabzy .ace_meta.ace_tag,.ace-colabzy .ace_storage {color: #F92672}.ace-colabzy .ace_punctuation,.ace-colabzy .ace_punctuation.ace_tag {color: #fff}.ace-colabzy .ace_constant.ace_character,.ace-colabzy .ace_constant.ace_language,.ace-colabzy .ace_constant.ace_numeric,.ace-colabzy .ace_constant.ace_other {color: #AE81FF}.ace-colabzy .ace_invalid {color: #F8F8F0;background-color: #F92672}.ace-colabzy .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #AE81FF}.ace-colabzy .ace_support.ace_constant,.ace-colabzy .ace_support.ace_function {color: #66D9EF}.ace-colabzy .ace_fold {background-color: #A6E22E;border-color: #F8F8F2}.ace-colabzy .ace_storage.ace_type,.ace-colabzy .ace_support.ace_class,.ace-colabzy .ace_support.ace_type {font-style: italic;color: #66D9EF}.ace-colabzy .ace_entity.ace_name.ace_function,.ace-colabzy .ace_entity.ace_other,.ace-colabzy .ace_entity.ace_other.ace_attribute-name,.ace-colabzy .ace_variable {color: #A6E22E}.ace-colabzy .ace_variable.ace_parameter {font-style: italic;color: #FD971F}.ace-colabzy .ace_string {color: #E6DB74}.ace-colabzy .ace_comment {color: #75715E}.ace-colabzy .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y}";

    var r=e("../lib/dom");
    r.importCssString(t.cssText,t.cssClass);
});
