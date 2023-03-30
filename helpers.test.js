describe("Tests for helpers.js", function(){
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 25;
        submitPaymentInfo();
    });

    it('should sum all tips when sumPaymentTotal is called', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(25);
        billAmtInput.value = 200;
        tipAmtInput.value = 50;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(75);
    });

    it('should sum all total payments when sumPaymentTotal is called', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        billAmtInput.value = 200;
        tipAmtInput.value = 50;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('should sum total tip percent when sumPaymentTotal is called', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(25);
        billAmtInput.value = 100;
        tipAmtInput.value = 25;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(50);
      });
    
      it('should sum tip percent of a single tip when calculateTipPercent() is called', function () {
        expect(calculateTipPercent(100, 20)).toEqual(20);
        expect(calculateTipPercent(90, 9)).toEqual(10);
      });
    
      it('should make/append new td from value when appendTd() is called', function () {
        let testTr = document.createElement('tr');
        appendTd(testTr, 'test');
        expect(testTr.children.length).toEqual(1);
        expect(testTr.firstChild.innerHTML).toEqual('test');
      });
    
      it('should make/append delete td when appendDeleteBtn() is called', function () {
        let testTr = document.createElement('tr');
        appendDeleteBtn(testTr);
        expect(testTr.children.length).toEqual(1);
        expect(testTr.firstChild.innerHTML).toEqual('X');
      });
    
      afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });
});