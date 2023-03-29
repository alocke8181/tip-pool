describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should not add servers when there is no name for submitServerInfo()",function(){
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual('0');
  });

  it('should update the server table when updateServerTable() is called', function(){
    submitServerInfo();
    updateServerTable();
    let testList = document.querySelectorAll('#serverTable tbody tr td');
    expect(testList.length).toEqual('3');
    expect(testList[0].innerText).toEqual('Alice');
    expect(testList[1].innerText).toEqual('$0.00');
    expect(testList[2].innerText).toEqual('X');
  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
