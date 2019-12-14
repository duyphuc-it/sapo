package com.sapo.edu.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {


    @Autowired
    PropertiesAtm propertiesAtm;

    @Bean
    public  Printer printerFile() {
        return new PrinterFile();
    }

    @Bean
    public Printer printerConsole() {
        return new PrinterConsole();
    }

    @Bean
    public BidvAtm bidvAtm() {
        return new BidvAtm(propertiesAtm.getMoneyAtm());
    }
}
