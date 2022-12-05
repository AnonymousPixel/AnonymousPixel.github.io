from flask import *
from flask import Flask, render_template, redirect, url_for
from datetime import datetime
import time,json,requests
import random as rand
app = Flask("app")
@app.before_request
def loghandler():
	pass
@app.route("/")
def render():
	return render_template("index.html", d=time.time(),projects=json.load(open("static/projects.json")))
@app.route("/aboutme")
def renderam():
  return render_template("aboutme.html")
@app.route("/project/<name>")
def renderproj(name):
	projects=json.load(open("static/projects.json"))
	try:
		if "download" in projects[name]: dl = url_for("static",filename="Downloads/%s"%(projects[name]["download"]))
		else: dl=None
		if "copy" in projects[name]: copy=projects[name]["copy"] 
		else: copy=None
		if "features" in projects[name]: features=projects[name]["features"] 
		else: features=None
		if "version" in projects[name]: version=projects[name]["version"]
		else: version=None
		if "link" in projects[name]: link=projects[name]["link"]
		else: link=None
		if "ltext" in projects[name]: ltext=projects[name]["ltext"]
		else: ltext=None
		if "text2" in projects[name]: text2=projects[name]["text2"]
		else: text2=None
		return render_template("ptemplate.html",name=projects[name]["name"],text=projects[name]["text"],features=features,img=url_for('static', filename="Images/%s"%(projects[name]["img"])),copy=copy,version=version,download=dl,link=link,ltext=ltext,text2=text2)
	except KeyError:
		return render_template("error.html",code=404)
@app.route("/random")
def random():
  projects=json.load(open("static/projects.json"))
  name = list(projects.keys())[rand.randint(0,len(projects)-1)]
  return redirect(url_for("renderproj",name=name))
@app.route("/ext/<link>")
def link(link):
	links = {"RPL":"https://www.replit.com"}
	return redirect(links[link])
@app.errorhandler(404)
def page_not_found(e):
  return render_template("error.html",code=404), 404
@app.route("/smallscreen")
def renders():
	return render_template("smallscreen.html")
@app.route("/SierraNovember")
def update():
  with open("static/SierraNovember.py","r") as sn:
    return {"code":sn.read()}
@app.errorhandler(500)
def internal_server_error(e):
  return render_template("error.html",code=500), 500
def runapp():
	try:
		app.run(debug=True, host="0.0.0.0", port=8080)
	except OSError:
		runapp()
runapp()