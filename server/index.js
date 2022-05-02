const Websocket = require("ws");


const wss = new Websocket.Server({port:5050});

wss.on("connection", wss => {
  data = {
        
            "sampp_event": {
              "sessionEvent": {
                "psn": "921345-E2-15",
                "start_time": "2021-09-17T07:31:00.722Z",
                "end_time": "2021-09-17T07:33:00.722Z",
                "network_id": "14",
                "network_name": "meldCx_Skunkworks",
                "site_id": "624",
                "site_name": "Nespresso Savigny",
                "location_id": "684",
                "location_name": "SuperTable23",
                "feeder_location_name": "SuperTable23",
                "feeder_site_name": "Nespresso Savigny",
                "floorplan_id": "281",
                "planogram_id": "124",
                "shelf_id": "62",
                "session_id": "00004",
                "overall_status": "passed",
                "system_compliance": {
                  "status": "Passed",
                  "events": {
                    "event_code": "sampp_0015",
                    "eventtype_code": "ST",
                    "event_type": "Packing Session Started",
                    "event_name": "New MPTL",
                    "event_description": "Start Check 1: MPTL displays a new code",
                    "event_status": "Passed",
                    "is_criticalevent": "False",
                    "error_level": "None",
                    "app_code": "sampp",
                    "is_manifested": "Yes",
                    "confidence": "98.4",
                    "scene_id": "1285",
                    "ar_id": "gar-0101",
                    "section_id": "1101",
                    "product_id": "",
                    "qty": "",
                    "cam_id": "3860",
                    "feeder_id": "3860",
                    "camera_name": "Feeder DESKTOP-I7RAI aba08bd0-bfa4-11ec-8647-f994b7e2c9c1",
                    "feeder_name": "Feeder DESKTOP-I7RAI aba08bd0-bfa4-11ec-8647-f994b7e2c9c1",
                    "timestamp": "2022-04-21T13:08:01.000Z"
                  }
                },
                "planogram_compliance": {
                  "status": "passed",
                  "events": {
                    "event_code": "sampp_0018",
                    "eventtype_code": "PC",
                    "event_type": "Planogram Complied",
                    "event_name": "RPOS",
                    "event_description": "The right products are detected on the right shelves. Confirms that the planogram matches the products on the shelves",
                    "event_status": "Passed",
                    "is_criticalevent": "False",
                    "error_level": "None",
                    "app_code": "sampp",
                    "is_manifested": "Yes",
                    "confidence": "99.1",
                    "scene_id": "1284",
                    "ar_id": "gar-0101",
                    "section_id": "1101",
                    "product_id": "7591.20",
                    "qty": "",
                    "cam_id": "3854",
                    "feeder_id": "3854",
                    "camera_name": "Feeder DESKTOP-I7RAI d3ce0bc0-bf8e-11ec-8647-f994b7e2c9c1",
                    "feeder_name": "Feeder DESKTOP-I7RAI d3ce0bc0-bf8e-11ec-8647-f994b7e2c9c1",
                    "timestamp": "2022-04-21T13:08:07.000Z"
                  }
                },
                "order_compliance": {
                  "status": "failed",
                  "events": {
                    "event_code": "sampp_0030",
                    "eventtype_code": "OC",
                    "event_type": "Packing Error",
                    "event_name": "Incorrect Product/s",
                    "event_description": "An Incorrect product is packed",
                    "event_status": "Failed",
                    "is_criticalevent": "False",
                    "error_level": "None",
                    "app_code": "sampp",
                    "is_manifested": "Yes",
                    "confidence": "99.1",
                    "scene_id": "1284",
                    "ar_id": "gar-0101",
                    "section_id": "1101",
                    "product_id": "7591.20",
                    "qty": "5",
                    "cam_id": "3854",
                    "feeder_id": "3854",
                    "camera_name": "Feeder DESKTOP-I7RAI d3ce0bc0-bf8e-11ec-8647-f994b7e2c9c1",
                    "feeder_name": "Feeder DESKTOP-I7RAI d3ce0bc0-bf8e-11ec-8647-f994b7e2c9c1",
                    "timestamp": "2022-04-21T13:08:07.000Z"
                  }
                }
              }
            }
          

    };
  console.log("connected on port 5050");
  wss.send(JSON.stringify(data))
});

wss.on("error", (err) => {
  console.log(err)
});