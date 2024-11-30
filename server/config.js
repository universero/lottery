/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 2,
    text: "特等奖",
    title: "宁波人就用宁波银行——手机",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 3,
    text: "一等奖",
    title: "德国米技厨房烹饪四件套",
    img: "../img/mbp.jpg"
  },
  {
    type: 3,
    count: 10,
    text: "特别艺术奖",
    title: "艺术无价情谊更高价——手绘艺术瓷瓶",
    img: "../img/huawei.png"
  },
  {
    type: 4,
    count: 10,
    text: "二等奖",
    title: "手持吸尘器",
    img: "../img/ipad.jpg"
  },
  {
    type: 5,
    count: 20,
    text: "二等奖",
    title: "10年陈皮",
    img: "../img/spark.jpg"
  },
  {
    type: 6,
    count: 10,
    text: "三等奖",
    title: "创意手提音响",
    img: "../img/kindle.jpg"
  },
  {
    type: 7,
    count: 20,
    text: "三等奖",
    title: "贝缔雅护手霜",
    img: "../img/edifier.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [2,3,10,10,20,10,20];

/**
 * 卡片公司名称标识
 */
const COMPANY = "北仑";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
