package com.shiv.java.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Phoneactivity entity
 * @author Shivendra Singh
 *
 */

@Entity
@Table(name="Phoneactivity")
public class Phoneactivity {
 
 @Id
 @GeneratedValue(strategy=GenerationType.IDENTITY)   //Example of Pojo for required table
 @Column(name="id", nullable = false)
 protected int id;
 
 @Column(name="Macaddress", nullable = false)
 protected String Macaddress;
 
 @Column(name="Ipaddress", nullable = false)
 protected String Ipaddress;
 
 @Column(name="Model", nullable = false)
 protected String Model;
 
 @Column(name="Firmware", nullable = false)
 protected String Firmware;
 
 public Phoneactivity() {
 }
 
 public Phoneactivity(String Macaddress, String Ipaddress, String Model, String Firmware) {
  super();
  this.Macaddress = Macaddress; 
  this.Ipaddress = Ipaddress;
  this.Model = Model;
  this.Firmware = Firmware;
 }

 public Phoneactivity(int id, String Macaddress, String Ipaddress, String Model, String Firmware) {
	  super();
	  this.id = id;
	  this.Macaddress = Macaddress;
	  this.Ipaddress = Ipaddress;
	  this.Model = Model;
	  this.Firmware = Firmware;
}
 
 
 public int getId() {
	  return id;
	 }
	 public void setId(int id) {
	  this.id = id;
	 }
	 
 public String getMacaddress() {
	 return Macaddress;
 }
 
 public void setMacaddress(String Macaddress) {
	 this.Macaddress = Macaddress;
 }
 
 
 public String getIpaddress() {
	 return Ipaddress;
 }

 public void setIpaddress(String Ipaddress) {
	 this.Ipaddress = Ipaddress;
 }
 
 
 public String getModel() {
	 return Model;
 }
 
 public void setModel(String Model) {
	this.Model = Model;
 }
 
 public String getFirmware() {
	 return Firmware;
 }
 
 public void setFirmware(String Firmware) {
	 this.Firmware = Firmware;
 }
 
}