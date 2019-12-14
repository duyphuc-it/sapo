package com.sapo.edu.app;

import org.springframework.stereotype.Component;

import java.math.BigDecimal;

public interface Atm {
    void withDraw(Customer customer, BigDecimal amount);

    void printCurrentMoney();

    void deposit(Customer customer, BigDecimal amount);

    void displayCustomerInfo(Customer customer);

    void setPrinter(Printer printer);
}