/* 用户路由 */
// 1. 导入express模块
const express = require("express");
// 2. 获取路由对象
const router = express.Router();
// 3. 处理路由对象
const getConnection = require("../mysqlConnection");
/**
 * 守望先锋
 * kind 参数
 */
router.get("/banners",(req,res) =>{
    let{kind} = req.query;
    switch(kind){
        case "banner":{
            let BannerAll = [];
            let text = ["解锁虚拟奖励","重温经典传奇","全新的冒险模式"];
            for (let i = 1; i < 4; i++) {
                BannerAll.push({
                    bgImg: `store_Banner_${i}.jpg`,
                    imgGame: `store_Banner_im_${i}.png`,
                    bannerText: text[i - 1]
                });
            }
            res.send({BannerAll});
        }
    }
})

// 4. 导出路由
module.exports = router;




