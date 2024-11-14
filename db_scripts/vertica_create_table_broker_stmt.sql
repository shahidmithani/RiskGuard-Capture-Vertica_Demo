CREATE TABLE broker_stmt (
  stmt_id IDENTITY(1),
  stmt_for varchar(45) NOT NULL,
  stmt_from varchar(45) NOT NULL,
  broker_number int NOT NULL,
  stmt_date datetime NOT NULL,
  account_month varchar(45) NOT NULL,
  company_code int NOT NULL,
  total_gross int NOT NULL,
  total_net int NOT NULL,
  payment_number int NOT NULL,
  PRIMARY KEY (stmt_id)
);
