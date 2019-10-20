pragma solidity ^0.5.0;

import "./CSCRegistry.sol";

contract CSC {
  bytes8 public geohash;
  bytes12 public csc;
  // Is the plot of land verified - different methods
  bool public isVerifiedByPublic;
  bool public isVerifiedByChainlink;
  bool public isVerifiedByIExec;

  constructor(bytes8 _geohash) public {
    geohash = _geohash;
    csc = computeCSC(geohash, address(this));
  }

  function computeCSC(bytes8 geohash_arg, address addr) internal returns(bytes12) {
    return bytes12(keccak256(abi.encodePacked(geohash_arg, addr)));
  }

  function registerWith(address cscRegistry) public {
    CSCRegistry(cscRegistry).register(csc);
  }
}
