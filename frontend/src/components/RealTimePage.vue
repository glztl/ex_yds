<template>
    <div class="page-container">
      <!-- 左侧图片播放器 -->
      <div class="player-container">
        <img :src="currentImage" alt="Image">
        <button @click="playNext">Next</button>
      </div>
  
      <!-- 右侧动作结果输出 -->
      <div class="action-container">
        <h2>Action Results</h2>
        <ul>
          <li v-for="result in actionResults" :key="result.id">{{ result }}</li>
        </ul>
      </div>
  
      <!-- 底部记录表格 -->
      <div class="table-container">
        <h2>Records</h2>
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(count, action) in actionCounts" :key="action">
              <td>{{ action }}</td>
              <td>{{ count }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // 使用@表示src目录的绝对路径，require函数导入图片
        images: [
        //   require('../assets/gdyd21.png'),
          require('../assets/yds001.png')
        ],
        currentIndex: 0,
        actionResults: [],
        actionCounts: {
          run: 0,
          jump: 0,
          walk: 0
        }
      };
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex];
      }
    },
    methods: {
      playNext() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      addActionResult(action) {
        this.actionResults.unshift(action);
        this.actionCounts[action]++;
      }
    }
  };
  </script>
  
  <style>
  /* 样式代码省略，根据需要自行添加 */
  </style>
  