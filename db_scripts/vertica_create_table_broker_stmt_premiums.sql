CREATE TABLE broker_stmt_premiums (
  premiums_id IDENTITY(1),
  stmt_id int NOT NULL,
  premiums_insured_name varchar(45) NOT NULL,
  premiums_policy_number varchar(45) NOT NULL,
  premiums_client_code varchar(45) NOT NULL,
  premiums_effective_date datetime NOT NULL,
  premiums_gross_premium int NOT NULL,
  premiums_commission_rate  int NOT NULL,
  premiums_net_premium  int NOT NULL,
  PRIMARY KEY (premiums_id),
  CONSTRAINT fk_stmt_id FOREIGN KEY (stmt_id) REFERENCES broker_stmt (stmt_id)
);
