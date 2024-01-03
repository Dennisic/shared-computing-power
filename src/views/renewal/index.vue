<template>
  <Header />
  <div class="p-[20px] scroll-contain-h">
    <div class="bg-[#FFFFFF] rounded-[2px] p-[20px]">
      <a-table :columns="tableColumns" :data-source="tableData" :pagination="pagination" >
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'action'">
            <div class="text-[14px] flex">
              <a-button type="link" >关闭自动续费</a-button>
              <a-button type="link" >打开自动续费</a-button> 
              <a-button type="link" >手动续费</a-button>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import Header from "@/components/Header.vue";
import { transTimestamp } from '@/utils/dateUtil';


const tableData = ref([])
const tableColumns = reactive([
  {
    title: '名称',
    dataIndex: 'bucket',
    key: 'bucket',
  },
  {
    title: '描述',
    dataIndex: 'bucket',
    key: 'bucket',
  },
  {
    title: '状态',
    dataIndex: 'bucket',
    key: 'bucket',
  },
  {
    title: '到期时间',
    dataIndex: 'createdTime',
    key: 'createdTime',
    customRender: ({ text: date }) =>  transTimestamp(date*1),
  },
  {
    title: '续费时间',
    dataIndex: 'createdTime',
    key: 'createdTime',
    customRender: ({ text: date }) =>  transTimestamp(date*1),
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
  },
])
const pagination = reactive({
  // 分页配置器
  pageSize: 10, // 一页的数据限制
  current: 1, // 当前页
  total: 10, // 总数
  size: 'small',
  position: ['bottomCenter'], //指定分页显示的位置
  hideOnSinglePage: false, // 只有一页时是否隐藏分页器
  showQuickJumper: false, // 是否可以快速跳转至某页
  showSizeChanger: false, // 是否可以改变 pageSize
  pageSizeOptions: ['10', '20', '30'], // 指定每页可以显示多少条
  onShowSizeChange: (current: number, pagesize: number) => {
    // 改变 pageSize时的回调
    pagination.current = current;
    pagination.pageSize = pagesize;
    getTableData()
  },
  onChange: (current: number) => {
    // 切换分页时的回调，
    pagination.current = current;
    getTableData()
  },
});

const getTableData = async () => {
  const params = {
    page: pagination.current,
    size: pagination.pageSize
  }
  // const res = await apiBucketList(params);
  // if (res.code == 200) {
  //   tableData.value = res.data.list;
  //   pagination.total = res.data.total
  // }else{
  //   message.error(res.message)
  // }
}
</script>
<style lang="less" scoped>

</style>