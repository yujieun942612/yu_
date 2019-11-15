(function($){
  //디바이스 정의
  // let mob=   mob=480, tab=768, pc=1280, laptop=1366;
  // let mySet =['mob',  'ab' , 'pc',  'laptop', 'pcfull']
  
  //반응형 크기에 따라 불러오는 파일 정의
  //mob  tab  pc  laptop pcfull
  //let myD =['mob',  'ab' , 'pc',  'laptop', 'pcfull']
  
  const wrap=$('#wrap');
  let tempFile='./rwd_temp/';


  const LoadFile = function(w){    
    switch(w){
      case 'mobile':
      wrap.load(tempFile + 'mob.html');
      break;
      case 'tablet':
      wrap.load(tempFile + 'tab.html');
      break;
      case 'pc':
      wrap.load(tempFile + 'pcbase.html');
      break;
      case 'laptop':
      wrap.load(tempFile + 'laptop.html');
      break;
      case 'pcfull':
      wrap.load(tempFile + 'pcfull.html');
      break;
    }
  }//LoadFile()

  //------------------------------

  
  //현재 디바이스 크기 파악하여 정의

  let mob=480, tab=768, pc=1280, laptop=1366;
  let nowDevice;
  const DeviceCheck =function(w){
  if(w <= mob){nowDevice = 'mobile';
   } else if(w >mob && w<=tab){nowDevice='tablet';
   }else if(w>tab && w<=pc){nowDevice='pc';
   }else if(w>pc && w <=laptop){nowDevice='laptop';
   }else{nowDevice='pcfull'; }
   return nowDevice;
  }//DeviceCheck();

  //--------------------------------
  const win = $(window);
  let winW  = win.outerWidth();
  //console.log(winW);

  let beforeDevice = DeviceCheck(winW);
  LoadFile(beforeDevice);
  console.log('beforeDevice',beforeDevice);
  //------------------------------------

  win.on('resize',function(){
    let nowWinW =win.outerWidth();
      let afterDevice= DeviceCheck(nowWinW);
      console.log(afterDevice);

      if(winW !== nowWinW &&beforeDevice !==afterDevice){
    location.reload();// 새로고침
    }
  });
})(jQuery);


//landing:일정스크롤 위치에 놓이면 필요한 기능을 나타나게 만드는 기능
//parallax:이벤트 처리시 동일한 공간의 내용이 각각다르게 보이도록 만드는 기능
