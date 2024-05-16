package com.yds.snn.backend.controller;

import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/test")
@CrossOrigin(origins = "http://localhost:8080")
public class tsetController {

    @GetMapping(value = "/test1")
    public String handleGradioRequest(@RequestParam String out1) {
        // Process input data and return result
//        System.out.println("success ! " + name + " >>> " + intensity + result);
//        return "success! " + name + " >>> " + intensity + result;
      return " \n后端connect success " + out1 + " !";
    }

    @GetMapping(value = "/dataList")
    public List<Map<String, Object>> getDataList() {
        List<Map<String, Object>> userList = new ArrayList<>();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");

        // 创建一个 Date 实例，代表当前时间
        Date currentDate = new Date();

        // 使用 SimpleDateFormat 格式化日期时间
        String formattedDateTime = sdf.format(currentDate);

        Map<String, Object> user1 = new HashMap<>();
        user1.put("name", "后端");
        user1.put("contact", "123456789");
        user1.put("image", "avatar1.jpg");
        user1.put("action", "点击");
        user1.put("time", "2024-05-11 10:30");
        user1.put("status", "完成");
        userList.add(user1);

        Map<String, Object> user2 = new HashMap<>();
        user2.put("name", "李四");
        user2.put("contact", "987654321");
        user2.put("image", "avatar2.jpg");
        user2.put("action", "滑动");
        user2.put("time", "2024-05-11 11:45");
        user2.put("status", "进行中");
        userList.add(user2);

        Map<String, Object> user3 = new HashMap<>();
        user3.put("name", "测试");
        user3.put("contact", "123456");
        user3.put("image", "img.png");
        user3.put("action", "跑");
        user3.put("time", formattedDateTime);
        user3.put("status", "完成");
        userList.add(user3);

        return userList;
    }

    @GetMapping(value = "/heartList")
    public List<Map<String, Object>> getHeart() {
        List<Map<String, Object>> userList = new ArrayList<>();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");

        // 创建一个 Date 实例，代表当前时间
        Date currentDate = new Date();

        // 使用 SimpleDateFormat 格式化日期时间
        String formattedDateTime = sdf.format(currentDate);

        for (int i = 0; i < 5; i++) {
            Map<String, Object> map = new HashMap<>();
            map.put("name", "test-00" + i);
            map.put("contact", "123456789-" + i);
            map.put("time", formattedDateTime);
            map.put("status", "完成");
            userList.add(map);
        }
        return userList;
    }

}
