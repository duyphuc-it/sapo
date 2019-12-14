package com.sapo.edu.app;


import org.springframework.stereotype.Component;

public class PrinterConsole implements Printer {
    @Override
    public void printCustomer(Customer customer) {
        System.out.println("CustomerId: " + customer.getAcctNo() + ", balance: " + customer.getBalance().toString());
    }

    @Override
    public void printMessage(String message) {
        System.out.println(message);
    }
}
