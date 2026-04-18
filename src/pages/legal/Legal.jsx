import React from "react";
import Footer2 from "../../components/Footer2";

export default function Legal() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 leading-relaxed">
      <h1 className="text-3xl font-bold mb-8">Legal Notices</h1>

      <ul className="space-y-4">
        <li>
          <strong>Site name :</strong> XHYPHER TECH
        </li>

        <li>
          <strong>URL :</strong>{" "}
          <a
            href="https://www.xhyphertech.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://www.xhyphertech.com
          </a>
        </li>

        <li>
          <strong>Responsible :</strong> Xhypher Tech
        </li>

        <li>
          <strong>Email :</strong>{" "}
          <a
            href="mailto:support@xyphertech.com"
            className="text-blue-600 hover:underline"
          >
            support@xhyphertech.com
          </a>
        </li>

        <li>
          <strong>Country :</strong> Zimbabwe 🇿🇼
        </li>

        <li>
          <strong>Host :</strong>{" "}
          <a
            href="https://host.xhyphertech.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
          XHYPHER HOST
          </a>
        </li>

        <li>
          <strong>Activity :</strong> Technology blog, web development,

automation, bots and digital services.
        </li>
      </ul>

      <p className="mt-6">
        The website administrator strives to provide accurate information.

However, no guarantee is given as to its accuracy or completeness.
      </p>
      {/* Footer */}
      <Footer2 />
    </div>
  );
        }
