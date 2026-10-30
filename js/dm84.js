var rule = {
    title: '动漫巴士',
    host: 'https://dm84.tv',
    homeUrl: '/list-1-1.html',
    url: '/list-fyclass-fypage.html',
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 8000,
    class_name: '国漫&日漫&欧美动漫&电影',
    class_url: '1&2&3&4',
    推荐: '.v_list li;.title&&Text;.cover&&data-bg;.desc&&Text;a&&href',
    一级: '.v_list li;.title&&Text;.cover&&data-bg;.desc&&Text;a&&href',
    二级: {
        title: '.v_title&&Text',
        img: '.v_content .cover img&&src',
        desc: '.v_desc&&Text',
        content: '#intro&&Text',
        tabs: '.play_from li',
        lists: '.play_list:eq(#id) li'
    },
    搜索: 'js:let r=JSON.parse(request(input));VODS=[];for(let i=0;i<r.list.length;i++){VODS.push({vod_name:r.list[i].name,vod_pic:"",vod_remarks:"",vod_content:"",vod_id:rule.host+"/v/"+r.list[i].id+".html"})}',
    play_parse: true,
    lazy: 'js:let h=request(input);let u=jsp.pdfh(h,"iframe&&src");if(u&&u.length>10){input={parse:1,url:u}}else{input={parse:1,url:input}}'
};
