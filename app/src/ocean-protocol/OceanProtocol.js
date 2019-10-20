import React, { Fragment, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Ocean } from '@oceanprotocol/squid'
import Loader from '../components/Loader'
import NavBar from '../components/NavBar'
import Web3 from 'web3'
import asset from './asset'
import './dashboard.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ReactTable from 'react-table'
import 'react-table/react-table.css'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  }
}));


let web3

if (window.web3) {
  web3 = new Web3(window.web3.currentProvider)
  window.ethereum.enable()
}



const OceanProtocol = ({ props }) => {

  const [ocean, setOcean] = useState(undefined)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(true)
  const [received, setReceived] = useState(false)
  const [results, setResults] = useState([])

  const setStatusWithTimeout = (msg) => {
    setStatus(msg)  
    // setTimeout(setStatus(''), 3000)
  }

  useEffect(async () => {
    let ocean = await new Ocean.getInstance({
      web3Provider: web3,
      nodeUri: 'https://nile.dev-ocean.com',
      aquariusUri: 'https://aquarius.marketplace.dev-ocean.com',
      brizoUri: 'https://brizo.marketplace.dev-ocean.com',
      brizoAddress: '0x4aaab179035dc57b35e2ce066919048686f82972',
      secretStoreUri: 'https://secret-store.nile.dev-ocean.com',
      // local Spree connection
      // nodeUri: 'http://localhost:8545',
      // aquariusUri: 'http://aquarius:5000',
      // brizoUri: 'http://localhost:8030',
      // brizoAddress: '0x00bd138abd70e2f00903268f3db08f2d25677c9e',
      // secretStoreUri: 'http://localhost:12001',
      verbose: true
    })
    setOcean(ocean)
    setLoading(false)
    console.log('Finished loading contracts.')
  }, [])

  const registerAsset = async () => {
    setLoading(true)
    setStatusWithTimeout('Dataset uploading...')
    try {
      const accounts = await ocean.accounts.list()
      const ddo = await ocean.assets.create(asset, accounts[0])
      console.log('Asset successfully submitted.')
      console.log(ddo)
      setStatusWithTimeout('The dataset was successfully submitted')
      // alert(
      //   'Asset successfully submitted. Look into your console to see the response DDO object.'
      //   )
      setLoading(false)
    } catch (error) {
      console.log('Failed too upload register asset')
      console.error(error.message)
      setLoading(false)
    }
  }

  const searchAssets = async () => {
    setLoading(true)
    setStatus('getting data')
    try {
      const search = await ocean.assets.search(
        'Carbon Credits Dataset'
        )
        setResults(search.results)
        setReceived(true)
        console.log(search)
        setLoading(false)
        setStatus('')
      } catch (error) {
        console.error(error.message)
        setLoading(false)
        setStatus(`There was an error ${error.message}`)
    }
  }

  const consumeAsset = async () => {
    try {
      // get all accounts
      const accounts = await ocean.accounts.list()
      // get first asset from search results
      const consumeAsset = results[0]
      // get service we want to execute
      const service = consumeAsset.findServiceByType('Access')
      // order service agreement
      const agreement = await ocean.assets.order(
        consumeAsset.id,
        service.serviceDefinitionId,
        accounts[0]
      )
      // consume it
      await ocean.assets.consume(
        agreement,
        consumeAsset.id,
        service.serviceDefinitionId,
        accounts[0],
        '',
        0
      )
    } catch (error) {
      console.error(error.message)
    }
  }

  const columns = [
    {
      Header: 'Id',
      accessor: 'id'
    },
    {
      Header: 'Score',
      accessor: 'score'
    },
    {
      Header: 'Created',
      accessor: 'created'
    },
  ]

  const classes = useStyles();
  return (
    <div className='ocean-protocol-dashboard' >
      <NavBar />

      <Typography variant='h2' style={{ padding: '1rem' }}>Ocean Protocol Dashboard </Typography>

      <p>
        {status}
      </p>

      {!web3 && <p>No Web3 Browser!</p>}


      {
        loading ?
          <Loader />
          :
          <Fragment>
            <Button color="primary" variant="contained" onClick={() => registerAsset()} disabled={!web3}>
              Upload latest Carbon Dataset
               </Button> {'    '}
            <Button color="primary" variant="contained" onClick={() => searchAssets()}>
              Retrieve Latest Upload
               </Button>

            {/* <Button color="primary" variant="contained" onClick={() => consumeAsset()} disabled={!web3}>
              Consume asset
               </Button> */}
            {received &&
              <ReactTable
                data={results}
                columns={columns}
                defaultPageSize={7}
              />
            }
          </Fragment>
      }
    </div >
  )

}

export default OceanProtocol
