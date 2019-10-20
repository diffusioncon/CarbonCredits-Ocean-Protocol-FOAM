pragma solidity ^0.5.0;

import "./CSCRegistry.sol";

contract CSC {
  bytes8 public geohash;
  bytes12 public csc;
  // Is the plot of land verified - different methods
  //      Lots more TODO here! - Placeholder!
  bool public isVerifiedByPublic;
  bool public isVerifiedByChainlink;
  bool public isVerifiedByIExec;

  constructor(bytes8 _geohash) public {
    geohash = _geohash;
    csc = computeCSC(geohash, address(this));
  }

  function computeCSC(bytes8 geohash_arg, address addr) internal pure returns(bytes12) {
    return bytes12(keccak256(abi.encodePacked(geohash_arg, addr)));
  }

  function registerWith(address cscRegistry) public {
    CSCRegistry(cscRegistry).register(csc);
  }

  // NOTE:: following 3 functions are temporary until oracle integration is fixed.
  //        there are no permissions or restrictions, it is purely for demo purposes!
  function setIsVerifiedByPublic(bool value) public {
    isVerifiedByPublic = value;
  }
  function setIsVerifiedByChainlink(bool value) public {
    isVerifiedByChainlink = value;
  }
  function setIsVerifiedByIExec(bool value) public {
    isVerifiedByIExec = value;
  }
}
