Page({
  data:{
    ticketType:['普通发票','专用发票'],
    ticketTypeIndex:0,
    ticketContent:['住宿费','餐饮费'],
    ticketContentIndex:0,
    ticketHeaderType:['企业','个人'],
    ticketHeaderTypeIndex:0,
    ticketHeader:'',
    ticketNum:''
  },
  bindTicketType: function (e){
    console.log(e.details)
  }

})