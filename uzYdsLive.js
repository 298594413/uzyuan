class YdsLiveApi {
    constructor() {
        this.host = 'http://api.hclyz.com:81';
        this.headers = { 'User-Agent': 'okhttp/3.12.0' };
        // 以下为你原文件中提取的全部 138 个分类
        this.rawClassesStr = `
            {"title":"卫视直播","value":"jsonweishizhibo.txt"},
            {"title":"龙珠","value":"jsonlongzhu.txt"},
            {"title":"映客","value":"jsonyingke.txt"},
            {"title":"卡哇伊","value":"jsonkawayi.txt"},
            {"title":"咪狐","value":"jsonmihu.txt"},
            {"title":"花蝴蝶","value":"jsonhuahudie.txt"},
            {"title":"蜜桃","value":"jsonmitao.txt"},
            {"title":"番茄社区","value":"jsonfanjiashequ.txt"},
            {"title":"LOVE","value":"jsonLOVE.txt"},
            {"title":"小妲己","value":"jsonxiaodaji.txt"},
            {"title":"77直播","value":"json77zhibo.txt"},
            {"title":"依依","value":"jsonyiyi.txt"},
            {"title":"日出","value":"jsonrichu.txt"},
            {"title":"彩虹","value":"jsoncaihong.txt"},
            {"title":"久久","value":"jsonjiujiu.txt"},
            {"title":"亚米","value":"jsonyami.txt"},
            {"title":"蝶恋","value":"jsondielian.txt"},
            {"title":"夜妖姬","value":"jsonyeyaoji.txt"},
            {"title":"套路","value":"jsontaolu.txt"},
            {"title":"樱花","value":"jsonyinghua.txt"},
            {"title":"享色","value":"jsonxiangse.txt"},
            {"title":"红浪漫","value":"jsonhonglangman.txt"},
            {"title":"金鱼","value":"jsonjinyu.txt"},
            {"title":"桃花","value":"jsontaohua.txt"},
            {"title":"花房","value":"jsonhuafang.txt"},
            {"title":"小仙女","value":"jsonxiaoxiannu.txt"},
            {"title":"视觉秀","value":"jsonshijuexiu.txt"},
            {"title":"小天使","value":"jsonxiaotianshi.txt"},
            {"title":"一直播","value":"jsonyizhibo.txt"},
            {"title":"彩云","value":"jsoncaiyun.txt"},
            {"title":"暗语","value":"jsonanyu.txt"},
            {"title":"咪咪","value":"jsonmimi.txt"},
            {"title":"娇媚","value":"jsonjiaomei.txt"},
            {"title":"黄瓜","value":"jsonhuanggua.txt"},
            {"title":"色趣","value":"jsonsequ.txt"},
            {"title":"糯米","value":"jsonnuomi.txt"},
            {"title":"小蜜蜂","value":"jsonxiaomifeng.txt"},
            {"title":"小红帽","value":"jsonxiaohongmao.txt"},
            {"title":"桃花运","value":"jsontaohuayun.txt"},
            {"title":"苦瓜","value":"jsonkugua.txt"},
            {"title":"爱爱你","value":"jsonaiaini.txt"},
            {"title":"樱花雨i","value":"jsonyinghuayui.txt"},
            {"title":"盘他","value":"jsonpanta.txt"},
            {"title":"夜色","value":"jsonyese.txt"},
            {"title":"蝴蝶","value":"jsonhudie.txt"},
            {"title":"小天仙","value":"jsonxiaotianxian.txt"},
            {"title":"杏趣","value":"jsonxingqu.txt"},
            {"title":"小坏蛋","value":"jsonxiaohuaidan.txt"},
            {"title":"飘雪","value":"jsonpiaoxue.txt"},
            {"title":"樱桃","value":"jsonyingtao.txt"},
            {"title":"奥斯卡","value":"jsonaosika.txt"},
            {"title":"卡路里","value":"jsonkaluli.txt"},
            {"title":"红高粱","value":"jsonhonggaoliang.txt"},
            {"title":"付宝","value":"jsonfubao.txt"},
            {"title":"小黄书","value":"jsonxiaohuangshu.txt"},
            {"title":"二嫂","value":"jsonersao.txt"},
            {"title":"花果山","value":"jsonhuaguoshan.txt"},
            {"title":"云鹿","value":"jsonyunlu.txt"},
            {"title":"菠萝","value":"jsonboluo.txt"},
            {"title":"星宝贝","value":"jsonxingbaobei.txt"},
            {"title":"夜艳","value":"jsonyeyan.txt"},
            {"title":"七仙女s","value":"jsonqixiannus.txt"},
            {"title":"夜来香","value":"jsonyelaixiang.txt"},
            {"title":"爱零","value":"jsonailing.txt"},
            {"title":"十八禁","value":"jsonshibajin.txt"},
            {"title":"兰桂坊","value":"jsonlanguifang.txt"},
            {"title":"Dancelife","value":"jsonDancelife.txt"},
            {"title":"小萌猪","value":"jsonxiaomengzhu.txt"},
            {"title":"蝴蝶飞","value":"jsonhudiefei.txt"},
            {"title":"幽梦","value":"jsonyoumeng.txt"},
            {"title":"丽柜厅","value":"jsonliguiting.txt"},
            {"title":"蛟龙","value":"jsonjiaolong.txt"},
            {"title":"颜如玉","value":"jsonyanruyu.txt"},
            {"title":"橙秀","value":"jsonchengxiu.txt"},
            {"title":"豹娱l","value":"jsonbaoyul.txt"},
            {"title":"小花螺","value":"jsonxiaohualuo.txt"},
            {"title":"皇后","value":"jsonhuanghou.txt"},
            {"title":"心之恋","value":"jsonxinzhilian.txt"},
            {"title":"欧美FEATURED","value":"jsonoumeiFEATURED.txt"},
            {"title":"欧美FEMALE","value":"jsonoumeiFEMALE.txt"},
            {"title":"欧美MALE","value":"jsonoumeiMALE.txt"},
            {"title":"欧美COUPLE","value":"jsonoumeiCOUPLE.txt"},
            {"title":"欧美TRANS","value":"jsonoumeiTRANS.txt"},
            {"title":"台妹l","value":"jsontaimeil.txt"},
            {"title":"爱恋","value":"jsonailian.txt"},
            {"title":"903娱乐","value":"json903yule.txt"},
            {"title":"九尾狐","value":"jsonjiuweihu.txt"},
            {"title":"尤物岛","value":"jsonyouwudao.txt"},
            {"title":"坦克","value":"jsontanke.txt"},
            {"title":"好基友","value":"jsonhaojiyou.txt"},
            {"title":"夜女郎","value":"jsonyenulang.txt"},
            {"title":"娇喘","value":"jsonjiaochuan.txt"},
            {"title":"芒果派","value":"jsonmangguopai.txt"},
            {"title":"媚颜","value":"jsonmeiyan.txt"},
            {"title":"风流","value":"jsonfengliu.txt"},
            {"title":"夜律","value":"jsonyelu.txt"},
            {"title":"玲珑","value":"jsonlinglong.txt"},
            {"title":"浴火","value":"jsonyuhuo.txt"},
            {"title":"翠鸟","value":"jsoncuiniao.txt"},
            {"title":"幸运星","value":"jsonxingyunxing.txt"},
            {"title":"她秀","value":"jsontaxiu.txt"},
            {"title":"招财猫","value":"jsonzhaocaimao.txt"},
            {"title":"双碟","value":"jsonshuangdie.txt"},
            {"title":"糖果","value":"jsontangguo.txt"},
            {"title":"么么哒","value":"jsonmemeda.txt"},
            {"title":"小性感","value":"jsonxiaoxinggan.txt"},
            {"title":"小喵宠","value":"jsonxiaomiaochong.txt"},
            {"title":"兔女郎","value":"jsontunulang.txt"},
            {"title":"睡美人","value":"jsonshuimeiren.txt"},
            {"title":"金呗","value":"jsonjinbei.txt"},
            {"title":"美夕","value":"jsonmeixi.txt"},
            {"title":"小妖","value":"jsonxiaoyao.txt"},
            {"title":"约直播","value":"jsonyuezhibo.txt"},
            {"title":"花仙子","value":"jsonhuaxianzi.txt"},
            {"title":"土豪","value":"jsontuhao.txt"},
            {"title":"红妆","value":"jsonhongzhuang.txt"},
            {"title":"妞妞","value":"jsonniuniu.txt"},
            {"title":"艳后","value":"jsonyanhou.txt"},
            {"title":"moon","value":"jsonmoon.txt"},
            {"title":"蓝猫","value":"jsonlanmao.txt"},
            {"title":"美人妆","value":"jsonmeirenzhuang.txt"},
            {"title":"入巷","value":"jsonruxiang.txt"},
            {"title":"持久男","value":"jsonchijiunan.txt"},
            {"title":"倾心","value":"jsonqingxin.txt"},
            {"title":"小精灵","value":"jsonxiaojingling.txt"},
            {"title":"偶遇","value":"jsonouyu.txt"},
            {"title":"灰灰","value":"jsonhuihui.txt"},
            {"title":"猫头鹰","value":"jsonmaotouying.txt"},
            {"title":"喜欢你","value":"jsonxihuanni.txt"},
            {"title":"夜纯","value":"jsonyechun.txt"},
            {"title":"杏播","value":"jsonxingbo.txt"},
            {"title":"名流","value":"jsonmingliu.txt"},
            {"title":"小辣椒","value":"jsonxiaolajiao.txt"},
            {"title":"蚊香社","value":"jsonwenxiangshe.txt"},
            {"title":"牵手","value":"jsonqianshou.txt"},
            {"title":"情趣","value":"jsonqingqu.txt"},
            {"title":"蓝月亮","value":"jsonlanyueliang.txt"},
            {"title":"小棉袄","value":"jsonxiaomianao.txt"}
        `;
    }

    // 自动解析分类字符串
    getClasses() {
        try {
            // 将字符串包装成合法 JSON 格式
            const items = JSON.parse(`[${this.rawClassesStr.trim().replace(/,\s*$/, '')}]`);
            return items;
        } catch (e) {
            console.error('解析分类失败:', e);
            return [];
        }
    }

    // 1. 获取分类列表
    async getClassList() {
        const classes = this.getClasses();
        return {
            data: classes.map(item => ({
                name: item.title,
                id: item.value,
                hasSubclass: false
            }))
        };
    }

    // 2. 获取视频列表
    async getVideoList(classId, page) {
        const url = `${this.host}/mf/${classId}`;
        try {
            const res = await uzUtils.fetch(url, { headers: this.headers });
            const json = JSON.parse(res);
            const list = json.zhubo || [];
            return {
                data: list.map(item => ({
                    name: decodeURIComponent(item.title),
                    id: item.address,
                    cover: item.img || '',
                    desc: ''
                }))
            };
        } catch (e) {
            console.error('获取视频列表失败:', e);
            return { data: [] };
        }
    }

    // 3. 获取视频详情
    async getVideoDetail(videoId) {
        return {
            data: {
                name: '',
                desc: '',
                episodes: [{ name: '播放', id: videoId }]
            }
        };
    }

    // 4. 获取播放地址
    async getVideoPlayUrl(episodeId) {
        return {
            url: episodeId,
            type: 'hls',
            headers: this.headers
        };
    }
}

// 实例化
const ydsLiveApi = new YdsLiveApi();
