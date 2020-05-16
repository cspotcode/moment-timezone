"use strict";

var helpers = require("../../helpers/helpers");

exports["Europe/Athens"] = {

	"guess:by:offset" : helpers.makeTestGuess("Europe/Athens", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Europe/Athens", { abbr: true }),

	"1916" : helpers.makeTestYear("Europe/Athens", [
		["1916-07-27T22:26:07+00:00", "00:00:59", "AMT", -5692 / 60],
		["1916-07-27T22:26:08+00:00", "00:26:08", "EET", -120]
	]),

	"1932" : helpers.makeTestYear("Europe/Athens", [
		["1932-07-06T21:59:59+00:00", "23:59:59", "EET", -120],
		["1932-07-06T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1932-08-31T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1932-08-31T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1941" : helpers.makeTestYear("Europe/Athens", [
		["1941-04-06T21:59:59+00:00", "23:59:59", "EET", -120],
		["1941-04-06T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1941-04-29T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1941-04-29T21:00:00+00:00", "23:00:00", "CEST", -120]
	]),

	"1942" : helpers.makeTestYear("Europe/Athens", [
		["1942-11-02T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1942-11-02T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1943" : helpers.makeTestYear("Europe/Athens", [
		["1943-03-29T22:59:59+00:00", "23:59:59", "CET", -60],
		["1943-03-29T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1943-10-03T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1943-10-03T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1944" : helpers.makeTestYear("Europe/Athens", [
		["1944-04-03T22:59:59+00:00", "23:59:59", "CET", -60],
		["1944-04-03T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1952" : helpers.makeTestYear("Europe/Athens", [
		["1952-06-30T21:59:59+00:00", "23:59:59", "EET", -120],
		["1952-06-30T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1952-11-01T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1952-11-01T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1975" : helpers.makeTestYear("Europe/Athens", [
		["1975-04-11T21:59:59+00:00", "23:59:59", "EET", -120],
		["1975-04-11T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1975-11-25T21:59:59+00:00", "00:59:59", "EEST", -180],
		["1975-11-25T22:00:00+00:00", "00:00:00", "EET", -120]
	]),

	"1976" : helpers.makeTestYear("Europe/Athens", [
		["1976-04-10T23:59:59+00:00", "01:59:59", "EET", -120],
		["1976-04-11T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1976-10-09T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1976-10-10T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1977" : helpers.makeTestYear("Europe/Athens", [
		["1977-04-02T23:59:59+00:00", "01:59:59", "EET", -120],
		["1977-04-03T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1977-09-25T23:59:59+00:00", "02:59:59", "EEST", -180],
		["1977-09-26T00:00:00+00:00", "02:00:00", "EET", -120]
	]),

	"1978" : helpers.makeTestYear("Europe/Athens", [
		["1978-04-01T23:59:59+00:00", "01:59:59", "EET", -120],
		["1978-04-02T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1978-09-24T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1978-09-24T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1979" : helpers.makeTestYear("Europe/Athens", [
		["1979-04-01T06:59:59+00:00", "08:59:59", "EET", -120],
		["1979-04-01T07:00:00+00:00", "10:00:00", "EEST", -180],
		["1979-09-28T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1979-09-28T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1980" : helpers.makeTestYear("Europe/Athens", [
		["1980-03-31T21:59:59+00:00", "23:59:59", "EET", -120],
		["1980-03-31T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1980-09-27T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1980-09-27T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1981" : helpers.makeTestYear("Europe/Athens", [
		["1981-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["1981-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1981-09-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1981-09-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1982" : helpers.makeTestYear("Europe/Athens", [
		["1982-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["1982-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1982-09-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1982-09-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1983" : helpers.makeTestYear("Europe/Athens", [
		["1983-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["1983-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1983-09-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1983-09-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1984" : helpers.makeTestYear("Europe/Athens", [
		["1984-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["1984-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1984-09-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1984-09-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1985" : helpers.makeTestYear("Europe/Athens", [
		["1985-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["1985-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1985-09-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1985-09-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1986" : helpers.makeTestYear("Europe/Athens", [
		["1986-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["1986-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1986-09-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1986-09-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1987" : helpers.makeTestYear("Europe/Athens", [
		["1987-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["1987-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1987-09-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1987-09-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1988" : helpers.makeTestYear("Europe/Athens", [
		["1988-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["1988-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1988-09-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1988-09-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1989" : helpers.makeTestYear("Europe/Athens", [
		["1989-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["1989-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1989-09-24T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1989-09-24T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1990" : helpers.makeTestYear("Europe/Athens", [
		["1990-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["1990-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1990-09-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1990-09-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1991" : helpers.makeTestYear("Europe/Athens", [
		["1991-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["1991-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1991-09-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1991-09-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1992" : helpers.makeTestYear("Europe/Athens", [
		["1992-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["1992-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1992-09-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1992-09-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1993" : helpers.makeTestYear("Europe/Athens", [
		["1993-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["1993-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1993-09-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1993-09-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1994" : helpers.makeTestYear("Europe/Athens", [
		["1994-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["1994-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1994-09-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1994-09-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1995" : helpers.makeTestYear("Europe/Athens", [
		["1995-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["1995-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1995-09-24T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1995-09-24T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1996" : helpers.makeTestYear("Europe/Athens", [
		["1996-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["1996-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1996-10-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1996-10-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1997" : helpers.makeTestYear("Europe/Athens", [
		["1997-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["1997-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1997-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1997-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1998" : helpers.makeTestYear("Europe/Athens", [
		["1998-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["1998-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1998-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1998-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"1999" : helpers.makeTestYear("Europe/Athens", [
		["1999-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["1999-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["1999-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["1999-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2000" : helpers.makeTestYear("Europe/Athens", [
		["2000-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["2000-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2000-10-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2000-10-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2001" : helpers.makeTestYear("Europe/Athens", [
		["2001-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2001-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2001-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2001-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2002" : helpers.makeTestYear("Europe/Athens", [
		["2002-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["2002-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2002-10-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2002-10-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2003" : helpers.makeTestYear("Europe/Athens", [
		["2003-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2003-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2003-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2003-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2004" : helpers.makeTestYear("Europe/Athens", [
		["2004-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2004-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2004-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2004-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2005" : helpers.makeTestYear("Europe/Athens", [
		["2005-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["2005-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2005-10-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2005-10-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2006" : helpers.makeTestYear("Europe/Athens", [
		["2006-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["2006-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2006-10-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2006-10-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2007" : helpers.makeTestYear("Europe/Athens", [
		["2007-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2007-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2007-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2007-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2008" : helpers.makeTestYear("Europe/Athens", [
		["2008-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2008-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2008-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2008-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2009" : helpers.makeTestYear("Europe/Athens", [
		["2009-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["2009-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2009-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2009-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2010" : helpers.makeTestYear("Europe/Athens", [
		["2010-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2010-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2010-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2010-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2011" : helpers.makeTestYear("Europe/Athens", [
		["2011-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["2011-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2011-10-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2011-10-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2012" : helpers.makeTestYear("Europe/Athens", [
		["2012-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2012-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2012-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2012-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2013" : helpers.makeTestYear("Europe/Athens", [
		["2013-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["2013-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2013-10-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2013-10-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2014" : helpers.makeTestYear("Europe/Athens", [
		["2014-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2014-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2014-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2014-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2015" : helpers.makeTestYear("Europe/Athens", [
		["2015-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["2015-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2015-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2015-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2016" : helpers.makeTestYear("Europe/Athens", [
		["2016-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["2016-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2016-10-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2016-10-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2017" : helpers.makeTestYear("Europe/Athens", [
		["2017-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["2017-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2017-10-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2017-10-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2018" : helpers.makeTestYear("Europe/Athens", [
		["2018-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2018-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2018-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2018-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2019" : helpers.makeTestYear("Europe/Athens", [
		["2019-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["2019-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2019-10-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2019-10-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2020" : helpers.makeTestYear("Europe/Athens", [
		["2020-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["2020-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2020-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2020-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2021" : helpers.makeTestYear("Europe/Athens", [
		["2021-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2021-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2021-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2021-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2022" : helpers.makeTestYear("Europe/Athens", [
		["2022-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["2022-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2022-10-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2022-10-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2023" : helpers.makeTestYear("Europe/Athens", [
		["2023-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["2023-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2023-10-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2023-10-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2024" : helpers.makeTestYear("Europe/Athens", [
		["2024-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["2024-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2024-10-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2024-10-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2025" : helpers.makeTestYear("Europe/Athens", [
		["2025-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2025-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2025-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2025-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2026" : helpers.makeTestYear("Europe/Athens", [
		["2026-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["2026-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2026-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2026-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2027" : helpers.makeTestYear("Europe/Athens", [
		["2027-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2027-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2027-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2027-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2028" : helpers.makeTestYear("Europe/Athens", [
		["2028-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["2028-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2028-10-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2028-10-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2029" : helpers.makeTestYear("Europe/Athens", [
		["2029-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2029-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2029-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2029-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2030" : helpers.makeTestYear("Europe/Athens", [
		["2030-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["2030-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2030-10-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2030-10-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2031" : helpers.makeTestYear("Europe/Athens", [
		["2031-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2031-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2031-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2031-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2032" : helpers.makeTestYear("Europe/Athens", [
		["2032-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2032-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2032-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2032-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2033" : helpers.makeTestYear("Europe/Athens", [
		["2033-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["2033-03-27T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2033-10-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2033-10-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2034" : helpers.makeTestYear("Europe/Athens", [
		["2034-03-26T00:59:59+00:00", "02:59:59", "EET", -120],
		["2034-03-26T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2034-10-29T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2034-10-29T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2035" : helpers.makeTestYear("Europe/Athens", [
		["2035-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2035-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2035-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2035-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2036" : helpers.makeTestYear("Europe/Athens", [
		["2036-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2036-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2036-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2036-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2037" : helpers.makeTestYear("Europe/Athens", [
		["2037-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["2037-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2037-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2037-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	])
};