package com.sapo.edu.app;

import java.math.BigDecimal;
import java.util.Scanner;

public class Customer {
    private String acctNo;
    private String pin;
    private BigDecimal balance;

    public Customer() {
    }

    public Customer(String accountNo,String pin,BigDecimal balance) {
        this.acctNo = accountNo;
        this.pin = pin;
        this.balance = balance;
    }

    public String getAcctNo() {
        return acctNo;
    }

    public void setAcctNo(String acctNo) {
        this.acctNo = acctNo;
    }

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }

    public void init() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Account name: ");
        this.acctNo = scanner.nextLine();
        System.out.print("Pin: ");
        this.pin = scanner.nextLine();
        System.out.print("Balance: ");
        this.balance = scanner.nextBigDecimal();
    }
}
