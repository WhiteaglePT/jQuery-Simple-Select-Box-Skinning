(function ($) {
    $.fn.selectSkin = function (userClass) {
        $(this).each(function (i, select) {
            $select = $("<div/>");
            $select.addClass("select-box").addClass(userClass);

            $placeHolder = $("<span/>");
            $placeHolder.html($(this).find("option:selected").html());
            $select.append($placeHolder);
            $(this).after($select);

            $select.append($(this));
            
            $(this).change(function () {
                $selectPlaceHolder = $(this).parent().find("span");
                $selectedOption = $(this).find("option:selected");
                $selectPlaceHolder.html($selectedOption.html());
            });
        });
    };
})(jQuery);