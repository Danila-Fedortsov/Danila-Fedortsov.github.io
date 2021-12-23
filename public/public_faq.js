$(function() {
    var $speed = 200;
    var $class = 'opened';
    var $class_open = '.faq-answer';

    $(document).ready(function() {
        $('.faq-question').on('click', function() {
            $ol = $(this).closest('ol');
            $answer = $(this).closest('li').find($class_open);

            if (!$(this).closest('li').hasClass($class)) {

                $ol.find('li').each(function() {
                    if ($(this).hasClass($class))
                        $(this).removeClass($class).find($class_open).slideUp($speed);
                });
            }

            $answer
                .slideToggle($speed)
                .closest('li')
                .toggleClass($class);
        });
    });
});