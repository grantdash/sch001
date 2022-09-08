fields =
  name:
    meta:
      title: "專案名稱"
      is-required: true
      desc: "取一個響亮的專案名稱吧！"

  thumb:
    # TODO
    meta:
      title: "專案代表圖"
      is-required: true
      desc: "放一張閃亮的代表圖！"

  brief:
    type: \@makeform/textarea
    meta:
      title: "專案簡介"
      is-required: true
      desc: "請以簡短（150 字內）且非專業人士也能理解的方式介紹此專案。"
      term: [{opset: \length, enabled: true, op: \lte, msg: '太長了', config: val: 150}]

  representative:
    meta:
      title: "提案代表人"
      is-required: true
      desc: "不需要是本名。獲獎團隊須在提案申請時，選定一位自然人作為團隊代表人。提案代表人將被視為提案的代表與聯絡人。"

  u22:
    type: \@makeform/radio
    meta:
      title: "提案代表人是否具有 U-22 組資格？"
      is-required: true
      desc: "資格請參考提案細則 https://sch001.g0v.tw/means/"
      config:
        values: <[是 否]>

  slackid:
    meta:
      title: "提案代表人的 g0v Slack ID"
      is-required: true
      desc: "如何加入 g0v Slack 請參考 https://g0v.hackmd.io/@jothon/joing0vslack"

  team:
    type: \@makeform/textarea
    meta:
      title: "提案團隊簡介"
      is-required: true
      desc: "請簡單介紹每位成員，包括背景、在專案中的角色（例如：專案經理、全端工程師、顧問等）若還需要徵求成員，也請在此項說明（還需要什麼人才）"

  motivation:
    type: \@makeform/textarea
    meta:
      title: "為什麼要做這個專案？（動機）"
      is-required: true
      desc: "或許你有一個故事？"

  goal:
    type: \@makeform/textarea
    meta:
      title: "專案目標、受眾與獨特性"
      is-required: true
      desc: "請以此句型釐清專案目標、受眾與獨特性：「為了解決（某使用者族群）遇到的（要解決的問題）困難，我的專案提供（某種解決方式），可以做到（如何解決問題）。我的專案跟（現有的解決方式），在（差異與區別部分）不同，因此具有不可取代性。」"

  ta:
    type: \@makeform/textarea
    meta:
      title: "請列出這個計畫的目標對象，他們的需求、情境與使用動機？"
      is-required: true

  diagram:
    meta:
      title: "請提供本專案的示意圖或介面設計草圖"
      is-required: true
      desc: "請以連結方式提供圖片。"
      term: [{opset: \string, enabled: true, op: \url, msg: '必須是網址'}]

  difficulties:
    type: \@makeform/textarea
    meta:
      title: "你覺得本專案可能會面臨的困難有哪些，你又會如何解決這些困難？"
      is-required: true

  future:
    type: \@makeform/textarea
    meta:
      title: "本專案結束後，未來可能進一步的發展？"
      is-required: true

  category:
    # TODO choice support `other`
    type: \@makeform/choice
    meta:
      title: "自選「四大主題」分類或「其他」"
      is-required: true
      config:
        values: [
          "COVID-19 新解方（New Solution for Preventing Pandemic）"
          "遠距教學解決方案（Solution of Distance Learing）"
          "社群經營與基礎建設（Community Management & Infrastructure）"
          "教育內容（Educational Content）"
        ]

