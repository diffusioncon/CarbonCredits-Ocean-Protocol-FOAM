pragma solidity ^0.5.0;

import "./CSC.sol";

contract CSCRegistry {
  event RegisterCSC(bytes12 csc, address addr, bytes8 geohash);
  mapping(bytes12 => address) public registry;

  function register(bytes12 csc) public {
    CSC caller = CSC(msg.sender);
    if (registry[csc] == address(0)) {
      require(computeCSC(caller.geohash(), msg.sender) == csc);
      registry[csc] = msg.sender;
      emit RegisterCSC(csc, msg.sender, caller.geohash());
    }
  }

  function computeCSC(bytes8 geohash, address addr) internal returns(bytes12) {
    return bytes12(keccak256(abi.encodePacked(geohash, addr)));
  }
}
