define({ 

 //Type your controller code here 
  onViewCreated: function()
  {
    this.view.preShow=this.preShow;
    
  },
  preShow: function(){
    var scope=this;
     this.view.segMain.onRowClick=this.data;
     this.view.flxBody.onClick=this.develop;
  },
  data: function()
  {
    var nav=new kony.mvc.Navigation("Form2");
    nav.navigate();
  },
  develop: function()
  {
    alert("Develop");
  }

 });