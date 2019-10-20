pragma solidity ^0.5.0;
import "./CSC.sol";
import "./CSCRegistry.sol";

contract CSCFactory {
  CSCRegistry public cscRegistory;
  event DeployedCSC(address _address, address _factoryAddress, bytes8 _geohash, bytes12 _csc);

  constructor(address registry) public {
      cscRegistory = CSCRegistry(registry);
  }

  function deploy(bytes8 _geohash) public returns (address) {
      CSC newCsc = new CSC(_geohash);
      newCsc.registerWith(address(cscRegistory));
      emit DeployedCSC(address(newCsc), address(this), _geohash, newCsc.csc());
      return address(newCsc);
  }
}
