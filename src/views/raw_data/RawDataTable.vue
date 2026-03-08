<script setup lang="ts">
export type TableItem = {
  idol: string;
  link: string;
  song: string;
};

const { rawData } = defineProps<{ rawData: Array<Array<TableItem>> }>();

const tableData: Array<TableItem> = rawData.flat();

const tmpArray_1: Array<number> = rawData.map((item) => item.length);
const tmpArray_2: Array<number> = [];
let sum: number = 0;
for (const n of tmpArray_1) {
  sum += n;
  tmpArray_2.push(sum);
}
tmpArray_2.unshift(0);
tmpArray_2.pop();

function objectSpanMethod({ _row, column, rowIndex, _columnIndex }) {
  if (column.property === "idol") {
    if (rowIndex === 0) {
      return [tableData.length, 1];
    } else {
      return [0, 0];
    }
  } else if (column.property === "link") {
    const index: number = tmpArray_2.indexOf(rowIndex);
    if (index !== -1) {
      return [tmpArray_1[index], 1];
    } else {
      return [0, 0];
    }
  }
}
</script>

<template>
  <el-table :data="tableData" :span-method="objectSpanMethod" border>
    <el-table-column prop="idol" label="偶像" />
    <el-table-column prop="song" label="Cover曲" />
    <el-table-column prop="link" label="備考" />
  </el-table>
</template>

<style scoped></style>
