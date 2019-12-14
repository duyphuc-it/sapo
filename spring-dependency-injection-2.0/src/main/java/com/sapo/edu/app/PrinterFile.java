package com.sapo.edu.app;

import org.springframework.stereotype.Component;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;


public class PrinterFile implements Printer {

    private File file = new File("LogMessage.txt");

    @Override
    public void printCustomer(Customer customer) {
        writeFile("CustomerId: " + customer.getAcctNo() + ", balance: " + customer.getBalance().toString());

    }

    @Override
    public void printMessage(String message) {
        writeFile(message);

    }

    public void writeFile(String message) {
        try {
            if (!file.exists()) {
                file.createNewFile();
            }
            BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(file, true));
            bufferedWriter.write(message);
            bufferedWriter.newLine();
            bufferedWriter.close();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
