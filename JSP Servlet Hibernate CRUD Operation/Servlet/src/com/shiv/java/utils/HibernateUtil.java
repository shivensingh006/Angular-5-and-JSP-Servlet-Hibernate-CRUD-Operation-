package com.shiv.java.utils;

import java.util.Properties;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.cfg.Environment;
import org.hibernate.service.ServiceRegistry;

import com.shiv.java.model.Phoneactivity;

public class HibernateUtil {
 private static SessionFactory sessionFactory;

 public static SessionFactory getSessionFactory() {
  if (sessionFactory == null) {
   try {
    Configuration configuration = new Configuration();

    /*
     * put all the configuration setting for database connection in configuration object.
     * you can also create hibernate.cfg.xml's to add this property for database connection
     */
    
    Properties settings = new Properties();
    settings.put(Environment.DRIVER, "com.mysql.jdbc.Driver");
    settings.put(Environment.URL, "jdbc:mysql://localhost:3306/activity?useSSL=false"); 
    settings.put(Environment.USER, "root");
    settings.put(Environment.PASS, "*****");
    settings.put(Environment.DIALECT, "org.hibernate.dialect.MySQL5Dialect");
                                              
    settings.put(Environment.SHOW_SQL, "true");           //Hibernate config file for database connection

    settings.put(Environment.CURRENT_SESSION_CONTEXT_CLASS, "thread");
    settings.put(Environment.HBM2DDL_AUTO, "none");

    configuration.setProperties(settings);
    configuration.addAnnotatedClass(Phoneactivity.class);

    
    /*
     * Initialize - StandardServiceRegistryBuilder. 
     * @StandardServiceRegistryBuilder: This package defines APIs to configuring Hibernate, 
     * and classes for building the Hibernate configuration
     */
    ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
      .applySettings(configuration.getProperties()).build();
    System.out.println("Hibernate Java Config serviceRegistry created");
    
    /*
     *@SessionFactory: use SessionFactory object per database
     */
    sessionFactory = configuration.buildSessionFactory(serviceRegistry);
    return sessionFactory;

   } catch (Exception e) {
    e.printStackTrace();
   }
  }
  return sessionFactory;
 }
}