<script setup lang="ts">
import RawDataTable from "../RawDataTable.vue";
import type { TableItem } from "../RawDataTable.vue";

const rawData_1: Array<Array<TableItem>> = [
  [
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/Qli37BOLc", song: "≠ME - ≠ME" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/Qli38BOLc", song: "トライアングル・ドリーマー - 虹のコンキスタドール" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/Qli39BOLc", song: "Happy - ハニースパイス" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/Qli40BOLc", song: "サンサン☀︎サマー - UtaGe!" },
  ],
  [
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QmDdNhMCY", song: "とくべチュ、して - =LOVE" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QmDdNhMCY", song: "あなたに夢CHU - ハニースパイス" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QmDdNhMCY", song: "PARTY HIGH!! - UtaGe!" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QmDdNhMCY", song: "トライアングル・ドリーマー - 虹のコンキスタドール" },
  ],
  [
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QolM17VNo", song: "ニコピの方程式 - 手羽先センセーション" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QolM17VNo", song: "恋愛Emergency - ハニースパイス" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QolM17VNo", song: "=虹色=サンシャイン - 煌めき☆アンフォレント" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QolM17VNo", song: "≠ME - ≠ME" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QolM17VNo", song: "幻想◈Moon Child - 月宵◇クレシェンテ" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QolM17VNo", song: "Kawaii Kaiwai - PiKi" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QolM17VNo", song: "ずっとずっとトモダチ - 芦田愛菜" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QolM17VNo", song: "電脳世界~DIVE INTO THE CYBER~ - AZ-ON" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QolM17VNo", song: "ラ・ラ・リバース - ジエメイ" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QolM17VNo", song: "PARTY HIGH!! - UtaGe!" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QolM17VNo", song: "Happy - ハニースパイス" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QolM17VNo", song: "トライアングル・ドリーマー - 虹のコンキスタドール" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QolM17VNo", song: "サンサン☀︎サマー - UtaGe!" },
  ],
  [
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QoKIsEix0", song: "PARTY HIGH!! - UtaGe!" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QoKIsEix0", song: "幻想◈Moon Child - 月宵◇クレシェンテ" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QoKIsEix0", song: "PARTY HIGH!! - UtaGe!" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QoKIsEix0", song: "Happy - ハニースパイス" },
  ],
  [
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QpZWsDvRr", song: "恋愛Emergency - ハニースパイス" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QpZWsDvRr", song: "幻想◈Moon Child - 月宵◇クレシェンテ" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QpZWsDvRr", song: "Happy - ハニースパイス" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QpZWsDvRr", song: "幻想◈Moon Child - 月宵◇クレシェンテ" },
    { idol: "空白扑克BlankPoker", link: "https://weibo.com/7830798257/QpZWsDvRr", song: "Happy - ハニースパイス" },
  ],
];
</script>

<template>
  <RawDataTable :rawData="rawData_1" />
  <el-divider border-style="hidden" />
</template>

<style scoped></style>
