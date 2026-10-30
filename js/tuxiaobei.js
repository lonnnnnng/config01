var rule = {
    title: '兔小贝',
    host: 'https://www.tuxiaobei.com',
    homeUrl: '/list/mip-data?typeId=2&page=1&callback=',
    url: '/list/mip-data?typeId=fyclass&page=fypage&callback=',
    detailUrl: '/play/fyid',
    searchUrl: '/search/index?key=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 8000,
    class_url: '2&3&4&25',
    class_name: '儿歌&故事&国学&启蒙',
    cate_exclude: '应用',
    推荐: 'json:data.items;name;image;duration_string;video_id',
    一级: 'json:data.items;name;image;duration_string;video_id',
    二级: '*',
    搜索: '.list-con&&.items;.text&&Text;mip-img&&src;.time&&Text;a&&href',
    play_parse: true,
    lazy: 'js:fetch_params.headers["user-agent"]=IOS_UA;let h=fetch(input,fetch_params);let s=jsp.pdfh(h,"body&&#videoWrap&&video-src");input=s;'
};
