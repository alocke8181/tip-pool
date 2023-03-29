describe("Tests for payments.js",function(){
    beforeEach(function (){
        billAmtInput.value = 100;
        tipAmtInput.value = 25;
    });

    it('adds a new payment to allPayments when submitPaymentInfo() is called', function(){
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('25');
        expect(allPayments['payment1'].tipPercent).toEqual('25');
    });

    it('submitPaymentInfo() should not add a payment if the amount is zero',function(){
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('appendPaymentTable() should update the paymentTable',function(){
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);
        let testList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(testList.length).toEqual('4');
        expect(testList[0].innerText).toEqual('$100');
        expect(testList[1].innerText).toEqual('$25');
        expect(testList[2].innerText).toEqual('$25');
        expect(testList[3].innerText).toEqual('X');
    });

    it('createCurPayment() should make a new payment',function(){
        let testPayment = {billAmt: '100', tipAmt: '25', tipPercent: 25};
        expect(createCurPayment()).toEqual(testPayment);
    });

    it('createCurPayment() should not accept empty inputs', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let testPayment = createCurPayment();
        expect(testPayment).toEqual(undefined);
    });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});