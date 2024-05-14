<template>
    <div class="container">
      <!-- 表头 -->
      <div class="row header">
        <div class="column">姓名</div>
        <div class="column">联系方式</div>
        <div class="column">图片</div>
        <div class="column">动作</div>
        <div class="column">时间</div>
        <div class="column">状态</div>
        <div class="column">操作</div>
      </div>
      <!-- 表格内容 -->
      <div v-for="(item, index) in list" :key="index" class="row">
        <div class="column">{{ item.name }}</div>
        <div class="column">{{ item.contact }}</div>
        <div class="column"><img :src="item.image" style="max-width: 50px; max-height: 50px;"></div>
        <div class="column">{{ item.action }}</div>
        <div class="column">{{ item.time }}</div>
        <div class="column">{{ item.status }}</div>
        <div class="column">
          <button class="view-btn" @click="viewItem(index)">查看</button>
          <button class="edit-btn" @click="editItem(index)">编辑</button>
          <button class="delete-btn" @click="deleteItem(index)">删除</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        list: [] // 初始化数据为空数组
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios.get('http://localhost:9502/test/dataList')
          .then(response => {
            // 直接将后端返回的数据赋值给列表
            this.list = response.data;
          })
          .catch(error => {
            console.error('请求数据失败:', error);
          });
      },
      viewItem(index) {
        console.log('查看:', this.list[index]);
      },
      editItem(index) {
        console.log('编辑:', this.list[index]);
      },
      deleteItem(index) {
        console.log('删除:', this.list[index]);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    width: 90%;
    margin: auto;
    background-color: #F6F8FA;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
  
  .column {
    flex: 1;
    padding: 10px; /* 调整单元格内边距 */
    font-size: 12px; /* 调整单元格字体大小 */
  }
  
  .header {
    font-weight: normal;
    background-color: #40C2F8;
    color: rgba(12, 2, 2, 0.675);
  }
  
  .view-btn {
    font-size: 12px;
    color: black;
    border-radius: 4px; 
    border: none;
  }
  
  .edit-btn {
    background-color: rgba(232, 243, 232, 0.946);
    color: black;
    font-size: 12px;
  }
  
  .delete-btn {
    background-color: rgba(240, 54, 17, 0.903);
    font-size: 12px;
  }
  
  button {
    color: white;
    border: none;
    padding: 4px 8px; /* 调整按钮内边距 */
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.8;
    background-color: rgb(30, 69, 210);
  }
  </style>
