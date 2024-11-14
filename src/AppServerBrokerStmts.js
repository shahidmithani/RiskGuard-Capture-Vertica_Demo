import React from 'react';
import {properties} from './properties';

export default function AppServerBrokerStmts(props) {
  const data = props.data

  const stmtFor       = data.find(({name}) => name === "For").data[0].value
  const stmtFrom      = data.find(({name}) => name === "From").data[0].value
  const brokerNumber  = data.find(({name}) => name === "BrokerNumber").data[0].value
  const stmtDate      = data.find(({name}) => name === "Date").data[0].value
  const accountMonth  = data.find(({name}) => name === "AccountMonth").data[0].value
  const companyCode   = data.find(({name}) => name === "CompanyCode").data[0].value
  const totalGross    = data.find(({name}) => name === "TotalGross").data[0].value
  const totalNet      = data.find(({name}) => name === "TotalNet").data[0].value
  const paymentNumber = data.find(({name}) => name === "PaymentNumber").data[0].value

  const premiumsInsuredName    = data.find(({name}) => name === "Premiums_Insured").data
  const premiumsPolicyNumber   = data.find(({name}) => name === "Premiums_PolicyNumber").data
  const premiumsClientCode     = data.find(({name}) => name === "Premiums_ClientCode").data
  const premiumsEffectiveDate  = data.find(({name}) => name === "Premiums_EffectiveDate").data
  const premiumsGrossPremium   = data.find(({name}) => name === "Premiums_GrossPremium").data
  const premiumsCommissionRate = data.find(({name}) => name === "Premiums_CommissionRate").data
  const premiumsNetPremium     = data.find(({name}) => name === "Premiums_NetPremium").data

  const insertBrokerStmtQuery = "insert into broker_stmt (stmt_for, stmt_from, broker_number, stmt_date, account_month, company_code, total_gross, total_net, payment_number) values (?, ?, ?, ?, ?, ?, ?, ?, ?)"
  const insertPremiumsQuery = "insert into broker_stmt_premiums (stmt_id, premiums_insured_name, premiums_policy_number, premiums_client_code, premiums_effective_date, premiums_gross_premium, premiums_commission_rate, premiums_net_premium) values (?, ?, ?, ?, ?, ?, ?, ?)"

  const {Client} = require('vertica-nodejs')
  const client = new Client({
    host     : properties.db_host,
    port     : properties.db_port,
    user     : properties.db_user,
    password : properties.db_password,
    database : properties.db_database
  })

  client.connect()

  client.query(
    insertBrokerStmtQuery,
    [stmtFor, stmtFrom, brokerNumber, stmtDate, accountMonth, companyCode, totalGross, totalNet, paymentNumber],
    (err, res) => {
      if (err) {
        console.log('error: ', err)
        throw err
      }

      client.query("select last_insert_id()", (err, res) => {
        if (err) console.log('error: ', err)
        let stmtId = res.rows[0].last_insert_id;
        console.log('New broker stmt added with stmt Id: ', stmtId);

        for (let i = 0; i < premiumsInsuredName.length; i++) {
          client.query(
            insertPremiumsQuery,
            [stmtId, premiumsInsuredName.at(i).value, premiumsPolicyNumber.at(i).value, premiumsClientCode.at(i).value, premiumsEffectiveDate.at(i).value, premiumsGrossPremium.at(i).value, premiumsCommissionRate.at(i).value, premiumsNetPremium.at(i).value],
            (err, res) => {
              if (err) {
                console.log('error: ', err)
                throw err
              }
            }
          )
        }

        client.query("commit", (err, res) => {
          if (err) console.log('error: ', err)
          client.end()
        })
      })
    }
  )

  return ("Successfully added Insurance Broker Statement data into Vertica Analytics database")
}