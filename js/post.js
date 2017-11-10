$(document).ready(function () {
    // 初始化 tooltip
    $('.tooltipped').tooltip({
        delay: 50
    });

    // 为 p 标签添加 flow-text 类
    $('p').addClass('flow-text');
    $('#post-container').show();
    $('#footer').show();
});